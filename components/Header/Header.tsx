import Link from "next/link";
import React from "react";
import { HeaderWrapper, LogoLink, LogoText, MenuLink } from "./Header.styled";
import { HeaderProps } from "./Header.types";

const Header = (props: HeaderProps) => {
  const { className = '' } = props;
  
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoLink style={{textDecoration: 'none'}}><LogoText>Harry Ghazni</LogoText></LogoLink>
      </Link>
      <div style={{display: 'flex'}}>
      <Link href="/">
          <MenuLink>Home</MenuLink>
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