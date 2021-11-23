import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Post from "../components/Post";
import { posts } from "../util/getAllPosts";
import React, { Key } from 'react';
import Hero from '../components/Hero';
import Blog from './Blog';
const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <>
      <Hero />
      <Blog />
      </>
    </div>
  )
}

export default Home
