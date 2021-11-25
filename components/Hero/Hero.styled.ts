import { Button } from "@mui/material";
import styled from "styled-components";
import { floatAnimation } from "../../styles/Animations.styled";

export const HeroWrapper = styled.main`
  display: block;
  position: relative;
  color: ${({theme}) => theme.colours.body};
  max-width: 80rem;
  margin: auto;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 100;
  font-size: 50px;
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
export const TriangleShape = styled.span`
  position: absolute;
  top: -20%;
  right: -7rem;
  z-index: -1;
  animation-name: ${floatAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  opacity: 0.9;
`;

export const BlueTubeCircularShape = styled.span`
  position: absolute;
  top: -40%;
  right: 0;
  z-index: -2;
  animation-name: ${floatAnimation};
  animation-duration: 16s;
  animation-iteration-count: infinite;
  opacity: 0.9;
`;
