import styled from "styled-components";
import { theme } from "../../styles/theme.styled";

export const MenuLink = styled.a`
  margin-right: 1rem;
  text-decoration: underline;
  color: ${({theme}) => theme.colours.body};
  
  &:hover {
    cursor: pointer;
  }`;

export const HeaderWrapper = styled.nav`
  display: flex ;
  justify-content: space-between;
  padding: 3rem 5vw;`;