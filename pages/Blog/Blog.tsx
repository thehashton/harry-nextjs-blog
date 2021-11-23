import { NextPage } from "next";
import React from "react";
import { posts } from "../../util/getAllPosts";
import { Key } from 'react';
import Post from "../../components/Post";
import styled from "styled-components";

const BlogzWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  padding: 5rem 0;
  margin: 0 10vw;
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