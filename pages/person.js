import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import {withRouter} from 'next/router';
import Head from 'next/head';
import {HideAt, ShowAt} from 'react-with-breakpoints';
import {format} from 'date-fns';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import ImageWrapper from '../components/ImageWrapper';
import Image from '../components/Image';
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';
import Footer from '../templates/Footer';

import {
  getData,
  changeColourToHex,
  getMenuColour,
  getFullUrl
} from '../helpers';

const Wrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.colour};
  color: #fff;
  margin-bottom: 20px;

  @media screen and (min-width: 991px) {
    float: right;
    width: calc(60% - 40px);
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  line-height: 52px;

  @media screen and (min-width: 991px) {
    font-size: 57pt;
    line-height: 1.3em;
  }
`;

const H2 = styled.h2`
  font-size: 30px;
  line-height: 1.3em;
  margin-bottom: 20px;

  @media screen and (min-width: 991px) {
    margin-bottom: 80px;
  }
`;

const ImageAndEmailContainer = styled.div`
  width: calc(40% - 20px);
  margin-right: 20px;
  float: left;
`;

const ImageContainer = styled.div`
  width: calc(40% - 20px);
  float: left;
  margin-right: 20px;
`;

const EmailContainer = styled.div`
  width: calc(40% - 20px);
  float: left;
  margin-right: 20px;
`;

const Contact = styled.div`
  @media screen and (min-width: 991px) {
    background: ${props => props.colour}};
    margin-top: -20px;
    padding: 20px;
    color: white;
    font-size: 24px;
    line-height: 30px;
  }
`;

const ContactHeader = styled.p`
  font-size: 40px;
  line-height: 52px;
`;

const PersonImageWrapper = ({image, email, colour}) => {
  if (email && image) {
    return (
      <HideAt breakpoint="mediumAndBelow">
        <ImageAndEmailContainer>
          <ImageWrapper>
            <Image url={getFullUrl(image)} />
          </ImageWrapper>
          <Contact colour={colour}>
            <ContactHeader>Contact</ContactHeader>
            <p>Email: {email}</p>
          </Contact>
        </ImageAndEmailContainer>
      </HideAt>
    );
  } else if (image) {
    return (
      <HideAt breakpoint="mediumAndBelow">
        <ImageContainer>
          <ImageWrapper>
            <Image url={getFullUrl(image)} />
          </ImageWrapper>
        </ImageContainer>
      </HideAt>
    );
  }

  return '';
};

const Word = styled.li`
  background: ${prop => prop.colour};
  color: white;
  position: relative;
  margin-bottom: 20px;
`;

const WordLink = styled.a`
  color: white;
  padding: 20px 20px 0;
  display: block;
`;

const WordDate = styled.div`
  color: ${props => props.colour};
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const WordsTitle = styled.h2`
  font-size: 30px;
  line-height: 36px;
  color: ${props => props.colour};
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 20px;
`;

const WordTitle = styled.h3`
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 20px;
`;

const WordReadMore = styled.div`
  color: white;
  background: ${props => props.colour};
  padding: 20px;
  margin-left: -20px;
  margin-right: -20px;

  @media screen and (min-width: 991px) {
    position: absolute;
    bottom: 0;
    width: 50%;
  }
`;

const WordText = styled.div`
  @media screen and (min-width: 991px) {
    float: left;
    width: 50%;
    min-height: 480px;
  }
`;

const WordImage = styled.div`
  width: 50%;
  float: right;
  height: 480px;
  margin-top: -20px;
  margin-right: -20px;
`;

const Person = withRouter(({router}) => (
  <Async
    promise={
      new Promise(async resolve => {
        const {query} = router;
        const pathname = query.id
          .split(' ')
          .join('-')
          .toLowerCase();
        const data = await getData(`data/people/${pathname}.json`);
        let words;
        if (data.json) {
          words = data.json.words;
        } else {
          words = data.words;
        }
        const colour = getMenuColour(data);

        let wordsData;

        if (words && words.length) {
          wordsData = await getData(`data/words/index.json`);
        }

        wordsData = (words || [])
          .filter(word => {
            const name = `${word
              .toLowerCase()
              .split(' ')
              .join('-')}.json`;
            return (
              !!wordsData[name] &&
              !!wordsData[name].data &&
              !!wordsData[name].data.date
            );
          })
          .sort((a, b) => {
            const aName = `${a
              .toLowerCase()
              .split(' ')
              .join('-')}.json`;
            const bName = `${b
              .toLowerCase()
              .split(' ')
              .join('-')}.json`;

            return (
              parseInt(wordsData[bName].data.date.split('-').join('')) -
              parseInt(wordsData[aName].data.date.split('-').join(''))
            );
          })
          .map(word => {
            const wordName = `${word
              .toLowerCase()
              .split(' ')
              .join('-')}.json`;
            return wordsData[wordName];
          });

        resolve({
          ...(data.json || data),
          colour,
          colourHex: changeColourToHex(colour),
          colourHexLight: changeColourToHex(colour, true),
          words: wordsData
        });
      })
    }
    then={({
      title,
      image,
      deck,
      email,
      phoneNumber,
      titleRole,
      filter,
      colour,
      colourHex,
      colourHexLight,
      words
    }) => (
      <React.Fragment>
        <Head>
          <title key="title">
            {title
              .split('-')
              .map(word => word[0].toUpperCase() + word.substr(1))
              .join(' ')}{' '}
            - Gateway Church, York
          </title>
        </Head>
        <Header
          colour={colour}
          colourHex={colourHex}
          colourHexLight={colourHexLight}
          Header={HeaderContainer}
        />
        <Container>
          <PersonImageWrapper email={email} image={image} colour={colourHex} />
          <Wrapper colour={colourHexLight}>
            <H1>
              {title
                .split('-')
                .map(word => word[0].toUpperCase() + word.substr(1))
                .join(' ')}
            </H1>
            <H2>{titleRole}</H2>
            <p dangerouslySetInnerHTML={{__html: deck}} />
          </Wrapper>

          <Clearfix />
          {words && words.length > 0 && (
            <WordsTitle colour={colourHex}>Words</WordsTitle>
          )}

          <ul>
            {words &&
              words.map(word => {
                const wordData = word && word.data;

                return (
                  wordData && (
                    <Word
                      key={word.url}
                      colour={changeColourToHex(wordData.colour, true)}
                    >
                      <WordLink
                        href={`/words/${wordData.title
                          .split(' ')
                          .join('-')
                          .split('-')
                          .map(word => word.toLowerCase())
                          .join('-')}`}
                      >
                        <WordText>
                          <WordDate colour={changeColourToHex(wordData.colour)}>
                            {format(wordData.date, 'EEEE do LLLL yyyy')}
                            {wordData.authors.map(({author}, index) => {
                              return (
                                <React.Fragment
                                  key={author}
                                  style={{
                                    marginBottom: '10px',
                                    marginRight: '5px',
                                    display: 'inline-block'
                                  }}
                                >
                                  {' - '}
                                  {author
                                    .split('-')
                                    .map(
                                      n =>
                                        n.charAt(0).toUpperCase() + n.slice(1)
                                    )
                                    .join(' ')}{' '}
                                </React.Fragment>
                              );
                            })}
                          </WordDate>
                          <WordTitle>
                            {wordData.title
                              .split('-')
                              .map(
                                word => word[0].toUpperCase() + word.substr(1)
                              )
                              .join(' ')}
                          </WordTitle>
                          <WordReadMore
                            colour={changeColourToHex(wordData.colour)}
                          >
                            Read More +
                          </WordReadMore>
                        </WordText>
                        <HideAt breakpoint="mediumAndBelow">
                          <WordImage>
                            <ImageWrapper>
                              <Image url={getFullUrl(wordData.image)} />
                            </ImageWrapper>
                          </WordImage>
                        </HideAt>
                        <Clearfix />
                      </WordLink>
                    </Word>
                  )
                );
              })}
          </ul>
        </Container>

        <Footer />
      </React.Fragment>
    )}
  />
));

export default Person;
