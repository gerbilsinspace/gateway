import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import Head from 'next/head';
import { getData, getMenuColour, changeColourToHex } from '../helpers';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Container from '../components/Container';
import Footer from '../templates/Footer';

const Deck = styled.div`
  background-color: ${props => props.colour};
  color: white;
  padding: 35px;
  line-height: 30px;
`;

const A = styled.a`
  color: ${props => props.colour};
  border-radius: 10px;
  border: 5px solid ${props => props.colour};
  padding: 10px 20px;
  display: inline-block;
  margin-top: 20px;
`;

const ContactUs = () => (
  <Async
    promise={
      new Promise(async resolve => {
        const data = await getData('data/contact-us.json');
        const colour = getMenuColour(data);

        resolve({
          ...data,
          colour,
          colourHex: changeColourToHex(colour),
          colourHexLight: changeColourToHex(colour, true)
        });
      })
    }
    then={({
      title,
      colour,
      colourHex,
      colourHexLight,
      contentImage,
      image,
      deck
    }) => (
      <React.Fragment>
        <Head>
          <title key="title">Contact Us - Gateway Church, York</title>
        </Head>
        <Header
          colour={colour}
          colourHex={colourHex}
          colourHexLight={colourHexLight}
          title={title}
          image={image}
          Header={HeaderContainer}
        />
        <Deck colour={colourHex}>
          <Container>
            <p>{deck}</p>
            <p>
              <A
                colour={colourHexLight}
                href="mailto:office@gatewaychurch.co.uk"
              >
                Email
              </A>
            </p>
          </Container>
        </Deck>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default ContactUs;
