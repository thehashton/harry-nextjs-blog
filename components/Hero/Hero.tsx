import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.main`
  display: block;
  padding: 2rem 0 6rem 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
`;

const Hero = () => {
  return (
    <HeroWrapper>
        <Title>Hero</Title>
        <Subtitle>I'm a UI/Accessibility Engineer</Subtitle>
    </HeroWrapper>
  )
}

export default Hero;