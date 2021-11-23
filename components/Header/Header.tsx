import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.nav`
  display: flex ;
  justify-content: space-between;
  padding: 3rem 5vw;

  a {
    margin-right: 1rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <a><h1>Harry Ghazni</h1></a>
      </Link>
      <div>
        <Link href="/Blog">
          <a>Blog</a>
        </Link>
        <Link href="/About">
          <a>About</a>
        </Link>
      </div>
    </HeaderWrapper>
  );
}

export default Header;