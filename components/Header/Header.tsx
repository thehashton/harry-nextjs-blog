import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { HeaderWrapper, MenuLink } from "./Header.styled";
import { HeaderProps } from "./Header.types";

const Header = (props: HeaderProps) => {
  const { className = '' } = props;
  return (
    <HeaderWrapper>
      <Link href="/">
        <MenuLink><h1>Harry Ghazni</h1></MenuLink>
      </Link>
      <div style={{display: 'flex'}}>
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