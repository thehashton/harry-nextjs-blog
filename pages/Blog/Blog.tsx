import { NextPage } from "next";
import React from "react";
import { posts } from "../../util/getAllPosts";
import { Key } from 'react';
import Post from "../../components/Post";
import styled from "styled-components";
import Layout from "../../components/Layout";

const BlogzWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Blog: NextPage = () => {
  return (
    <Layout pageTitle="Blog" description={"blog"}>
      <BlogzWrapper>
        {posts.map((post: { link: Key | null | undefined; }) => (
          <Post key={post.link} post={post} />
        ))}
      </BlogzWrapper>
    </Layout>
  )
}

export default Blog;