import { Button } from "@mui/material";
import styled from "styled-components";
import { floatAnimation } from "../../styles/Animations.styled";

export const HeroWrapper = styled.main`
  display: block;
  position: relative;
  color: ${({theme}) => theme.colours.body};
  max-width: 80rem;
  margin: auto;
  background: rgba(25,25,25,0.5);
  backdrop-filter: blur(148px);
  border-radius: 25px;
  padding: 20px;
`;

export const HeroBorder = styled.main`
  background: rgba(25,25,25,0.5); 
  padding: 20px;
  border-radius: 25px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 40px;
  max-width: 60rem;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  margin: 20px 0 0 0;
  font-size: 30px;
`;

export const BlogButton = styled(Button)`
  font-size: 18px;
  margin: 20px 0 0 0;
  border-radius: 8px;
  font-weight: 500;
  padding: 8px 16px;
  text-transform: capitalize;
`;

export const VideosButton = styled(Button)`
  font-size: 18px;
  margin: 20px 0 0 0;
  border-radius: 8px;
  font-weight: 500;
  padding: 8px 16px;
  text-transform: capitalize;
`;

// SHAPES
const floatingShape = styled.span`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const TriangleShape = styled(floatingShape)`
  position: absolute;
  top: -25%;
  right: -15%;
  z-index: -1;
  animation-name: ${floatAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  opacity: 1;
`;

export const BlueTubeCircularShape = styled(floatingShape)`
  position: absolute;
  top: -5%;
  right: -10%;
  z-index: -2;
  animation-name: ${floatAnimation};
  animation-duration: 32s;
  animation-iteration-count: infinite;
  opacity: 1;
`;

export const OrangeAtomIcosa = styled(floatingShape)`
  position: absolute;
  bottom: -10%;
  right: 25.5%;
  z-index: -3;
  animation-name: ${floatAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  opacity: 0.9;
`;

export const OrangeAtomHexa = styled(floatingShape)`
  position: absolute;
  top: -30%;
  right: 60%;
  z-index: 3;
  animation-name: ${floatAnimation};
  animation-duration: 32s;
  animation-iteration-count: infinite;
  opacity: 0.9;
`;

export const GreenPlatonicOcta = styled(floatingShape)`
  position: absolute;
  bottom: 5%;
  right: 10%;
  z-index: 3;
  animation-name: ${floatAnimation};
  animation-duration: 16s;
  animation-iteration-count: infinite;
  opacity: 1;
`;
