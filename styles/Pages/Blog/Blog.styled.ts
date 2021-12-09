import styled from "styled-components";
import { floatingShape } from "../../../components/Hero/Hero.styled";
import { floatAnimation } from "../../Animations.styled";

export const BlogHero = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 5rem;
`;

export const BlogHeroText = styled.div`
  display: block;
`;

export const BlogBlueTubeCircularShape = styled(floatingShape)`
  position: absolute;
  top: -15%;
  right: -5%;
  z-index: -2;
  animation-name: ${floatAnimation};
  animation-duration: 32s;
  animation-iteration-count: infinite;
  opacity: 1;
  width: 20rem;
  height: 20rem;
`;