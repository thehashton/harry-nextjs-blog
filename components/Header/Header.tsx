import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import React from "react";
import { HeaderWrapper, HomePageIcon, LogoLink, LogoText, MenuLink, MenuUnderline } from "./Header.styled";
import common from '../../common';

const Header = () => {
  
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoLink style={{textDecoration: 'none'}}>
          <LogoText>{common.name}</LogoText>
        </LogoLink>
      </Link>
      <div style={{display: 'flex', alignItems: 'center', zIndex: '10'}}>
      <Link href="/">
          <MenuLink><HomePageIcon sx={{fontSize: "30px"}} /></MenuLink>
        </Link>
        <Link href="/Courses">
          <MenuLink>Courses<MenuUnderline /></MenuLink>
        </Link>
        <Link href="/Blog">
          <MenuLink>Blog<MenuUnderline /></MenuLink>
        </Link>
        <Link href="/About">
          <MenuLink>About<MenuUnderline /></MenuLink>
        </Link>
      </div>
    </HeaderWrapper>
  );
}

export default Header;