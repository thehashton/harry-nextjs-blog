import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';

export const HeaderWrapper = styled.nav`
  display: flex ;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2vw;
  max-width: 95rem;
  margin: auto;
  z-index: 99;
`;

export const HomePageIcon = styled(HomeIcon)`
  display: block;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuLink = styled.a`
  position: relative;
  font-size: 22px;
  margin-right: 1rem;
  opacity: 0.6;
  color: ${({theme}) => theme.colours.body};
  text-decoration: none;
  
  &:hover {
    cursor: pointer;

    >span {
      width: 100%;
    }
}`;

export const MenuUnderline = styled.span`
  position: absolute;
  left: 0; right: 0;
  bottom: 0;
  width: 0;
  border-bottom: 2px solid;
  transition: width .3s;

  &:hover {
    width: 100%;
  }
`;

export const LogoLink = styled(MenuLink)`
  opacity: 1;
`;

export const LogoText = styled.h1`
  font-size: 30px;
  letter-spacing: 6px;
  font-family: 'Outfit', sans-serif;
`;
