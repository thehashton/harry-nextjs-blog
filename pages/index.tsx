import type { NextPage } from 'next'
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Blog from './Blog';
const Home: NextPage = () => {

const Container = styled.div`
  margin: 0 10vw;
`;

  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Blog />
    </>
  )
}

export default Home
