import styled from "styled-components";

export const HeroWrapper = styled.main`
  display: block;
  padding: 2rem 0 6rem 0;
  color: ${({theme}) => theme.colours.body};
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
`;