import { ButtonGroup } from '@mui/material';
import React from 'react';
import { HeroWrapper, Title, Subtitle, BlogButton, VideosButton, TriangleShape, BlueTubeCircularShape } from './Hero.styled';
import Image from 'next/image'

const Hero = () => {
  return (
    <HeroWrapper>
        <Title>Helping make the world a better place through considered UI, empathy and teaching.</Title>
        <Subtitle>I'm a UI / Accessibility Engineer <b>@THRIVE.</b></Subtitle>
      <ButtonGroup style={{marginTop: '40px'}}>
        <BlogButton variant="contained" color="primary" href="#blog" disableRipple>Read the Blog</BlogButton>  
        <VideosButton variant="outlined" color="info" href="#videos" disableRipple>View Videos</VideosButton>  
      </ButtonGroup>
      <TriangleShape>
        <Image src="/Images/Site/Pyramid_Tall.png" height="400px" width="400px" />
      </TriangleShape>
      <BlueTubeCircularShape>
        <Image src="/Images/Site/Tube_Short_Thin.png" height="600px" width="600px" />
      </BlueTubeCircularShape>
    </HeroWrapper>
  )
}

export default Hero;