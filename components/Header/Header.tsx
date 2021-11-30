import Link from "next/link";
import React from "react";
import { HeaderWrapper, LogoLink, LogoText, MenuLink } from "./Header.styled";

const Header = () => {
  
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoLink style={{textDecoration: 'none'}}>
          <LogoText>Harry Ghazni</LogoText>
        </LogoLink>
      </Link>
      <div style={{display: 'flex', zIndex: '10'}}>
      <Link href="/">
          <MenuLink>Home</MenuLink>
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