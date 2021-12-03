import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import React from "react";
import { HeaderWrapper, HomePageIcon, LogoLink, LogoText, MenuLink } from "./Header.styled";

const Header = () => {
  
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoLink style={{textDecoration: 'none'}}>
          <LogoText>Harry Ghazni</LogoText>
        </LogoLink>
      </Link>
      <div style={{display: 'flex', alignItems: 'center', zIndex: '10'}}>
      <Link href="/">
          <MenuLink><HomePageIcon sx={{fontSize: "30px"}} /></MenuLink>
        </Link>
        <Link href="/Courses">
          <MenuLink>Courses</MenuLink>
        </Link>
        <Link href="/Blog">
          <MenuLink>Blog</MenuLink>
        </Link>
        <Link href="/About">
          <MenuLink>About</MenuLink>
        </Link>
      </div>
    </HeaderWrapper>
  );
}

export default Header;