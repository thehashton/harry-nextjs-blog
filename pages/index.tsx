import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { HeroBorder } from '../components/Hero/Hero.styled';
import Layout from '../components/Layout';
import BlogPosts from './Blog/BlogPosts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Harry Ghazni - UI/Accessibility Engineer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
        <HeroBorder>
          <Hero />
        </HeroBorder>
      <BlogPosts />
    </>
  )
}

export default Home;
