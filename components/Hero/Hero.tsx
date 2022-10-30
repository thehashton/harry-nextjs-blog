import { ButtonGroup } from '@mui/material';
import React from 'react';
import { HeroWrapper, Title, Subtitle, BlogButton, VideosButton, TriangleShape, BlueTubeCircularShape, OrangeAtomIcosa, OrangeAtomHexa, GreenPlatonicOcta } from './Hero.styled';
import Image from 'next/image'
import VideoPlayButton from './VideoPlayButton';

const Hero = () => {
  return (
    <HeroWrapper>
        <Title>Helping make the world a better place through considered <span style={{color: "#6195f5"}}>UI</span>, <span style={{color: "#6195f5"}}>empathy</span> and <span style={{color: "#6195f5"}}>teaching</span>.</Title>
        <Subtitle>I'm a Senior Frontend Developer <b style={{color: "orange"}}>@EO.</b></Subtitle>
      <ButtonGroup style={{marginTop: '40px'}}>
        <BlogButton variant="contained" color="primary" href="#blog" disableRipple>Read the Blog</BlogButton>  
        <VideosButton variant="contained" color="info" href="#videos" disableRipple>Watch Videos</VideosButton>  
      </ButtonGroup>

      <TriangleShape>
        <Image src="/Images/Site/Pyramid_Tall.png" height="400px" width="400px" />
      </TriangleShape>

      <BlueTubeCircularShape>
        <Image src="/Images/Site/Tube_Short_Thin.png" height="500px" width="500px" />
      </BlueTubeCircularShape>

      <OrangeAtomIcosa>
        <Image src="/Images/Site/Atom_Icosa.png" height="150px" width="150px" />
      </OrangeAtomIcosa>

      <OrangeAtomHexa>
        <Image src="/Images/Site/Atom_Hexa.png" height="70px" width="70px" />
      </OrangeAtomHexa>

      <GreenPlatonicOcta>
        <Image src="/Images/Site/Platonic_Octa.png" height="50px" width="50px" />
      </GreenPlatonicOcta>

      <VideoPlayButton />
    </HeroWrapper>
  )
}

export default Hero;