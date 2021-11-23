import Link from "next/link";
import styled from "styled-components";
import { HeaderProps } from "./Header.types";

const MenuLink = styled.a`
  margin-right: 1rem;
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }`;

const HeaderWrapper = styled.nav`
  display: flex ;
  justify-content: space-between;
  padding: 3rem 5vw;`;

const Header = (props: HeaderProps) => {
  const { className='' } = props;
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