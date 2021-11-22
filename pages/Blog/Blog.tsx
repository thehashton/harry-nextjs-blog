import { NextPage } from "next";
import React from "react";
import { posts } from "../../util/getAllPosts";
import { Key } from 'react';
import styles from '../../styles/Home.module.css'
import Post from "../../components/Post";

const Blog: NextPage = () => {
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

export default Blog;