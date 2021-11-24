import { Button } from "@mui/material";
import styled from "styled-components";

export const HeroWrapper = styled.main`
  display: block;
  padding: 2rem 0 6rem 0;
  color: ${({theme}) => theme.colours.body};
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
