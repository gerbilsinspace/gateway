import * as React from 'react';
import styled from 'styled-components';

import Clearfix from './Clearfix';
import Container from './Container';
import ImageWrapper from './ImageWrapper';

const Text = styled.div`
  background-color: ${props => props.colour};
  color: white;
  padding: 35px;
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 20px;

  @media screen and (min-width: 991px) {
    width: calc(40% - 80px);
    float: left;
    margin-right: 20px;
    height: 430px;
    font-size: 24px;
  }
`;

const Image = styled.div`
  background-image: url('${props => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const HomeDeck = ({ colour, text, image }) => (
  <Container>
    <Text colour={colour} dangerouslySetInnerHTML={{ __html: text }} />
    <ImageWrapper mobileHeight="400px">
      <Image src={image} />
    </ImageWrapper>
    <Clearfix />
  </Container>
);

export default HomeDeck;
