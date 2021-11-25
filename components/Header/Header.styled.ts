import styled from "styled-components";
import { theme } from "../../styles/theme.styled";

export const MenuLink = styled.a`
  font-size: 22px;
  margin-right: 1rem;
  opacity: 0.6;
  color: ${({theme}) => theme.colours.body};
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
}`;

export const LogoLink = styled(MenuLink)`
  opacity: 1;
`;

export const LogoText = styled.h1`
  font-size: 30px;
  letter-spacing: 6px;
  font-family: 'Outfit', sans-serif;
`;

export const HeaderWrapper = styled.nav`
  display: flex ;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5vw;
  `;
