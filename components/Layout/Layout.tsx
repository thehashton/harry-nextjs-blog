import Head from "next/head";
import Header from "../Header";
import styled from 'styled-components';

const Main = styled.main`
  max-width: 80rem;
  margin: auto;
`;

const Content = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
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
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap");
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          background: #272626;
          color: #fff;
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        a {
          color: #fff;
        }
      `}</style>
      <Main>
        <Header />
        <Content>{children}</Content>
      </Main>
    </>
  );
}
