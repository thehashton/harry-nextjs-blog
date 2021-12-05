import Head from "next/head";
import styled from 'styled-components';
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Footer from "../Footer";

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
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },}}
          >
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
      </motion.div>
    </>
  );
}
