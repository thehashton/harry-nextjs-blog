import { NextPage } from "next";
import React from "react";
import { posts } from "../../util/getAllPosts";
import { Key } from 'react';
import styles from '../../styles/Home.module.css'
import Post from "../../components/Post";
import styled from "styled-components";

const BlogzWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding: 5rem 0;
`;

const Blog: NextPage = () => {
  return (
    <Container>
      <BlogzWrapper>
        {posts.map((post: { link: Key | null | undefined; }) => (
          <Post key={post.link} post={post} />
        ))}
      </BlogzWrapper>
    </Container>
  )
}

export default Blog;