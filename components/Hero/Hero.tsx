import { ButtonGroup } from '@mui/material';
import React from 'react';
import { HeroWrapper, Title, Subtitle, BlogButton, VideosButton } from './Hero.styled';

const Hero = () => {
  return (
    <HeroWrapper>
        <Title>Helping make the world a better place through considered UI, empathy and teaching.</Title>
        <Subtitle>I'm a UI / Accessibility Engineer <b>@THRIVE.</b></Subtitle>
      <ButtonGroup style={{marginTop: '40px'}}>
        <BlogButton variant="contained" color="primary" href="#blog" disableRipple>Read the Blog</BlogButton>  
        <VideosButton variant="outlined" color="info" href="#videos" disableRipple>View Videos</VideosButton>  
      </ButtonGroup>
    </HeroWrapper>
  )
}

export default Hero;