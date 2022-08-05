import React from "react";
import Post from "../../../components/Post";
import styled from "styled-components";
import { posts } from "../../../util/getAllPosts";
import { Key } from 'react';
const readingTime = require('reading-time');

const BlogzWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
  margin: 0 auto;
  max-width: 80rem;
  margin: auto;
  padding: 2rem 1rem 0 1rem;
`;


export const BlogPosts = () => {
  return (
    <BlogzWrapper>
      {posts.slice(0,6).map((post: { link: Key | null | undefined; }, id: number) => (
        <div key={id}>
          <Post key={post.link} post={post} />
          {/* <p>READING TIME: {readingTime(post).time}</p> */}
        </div>
      ))}
    </BlogzWrapper>
  )
}

export default BlogPosts;