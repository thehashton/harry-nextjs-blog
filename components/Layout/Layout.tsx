import Head from "next/head";
import styled from 'styled-components';

const Main = styled.main`
  max-width: 80rem;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 80rem;
  padding: 0;
`;


export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <Main>
        <Content>{children}</Content>
      </Main>
    </>
  );
}
