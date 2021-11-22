import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Post from "../components/Post";
import { posts } from "../util/getAllPosts";
import { Key } from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <>
      {posts.map((post: { link: Key | null | undefined; }) => (
        <Post key={post.link} post={post} />
      ))}
    </>
    </div>
  )
}

export default Home
