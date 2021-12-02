import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import BlogPosts from "./BlogPosts";

const Blog: NextPage = () => {
  return (
    <Layout pageTitle="Blog" description={"blog"}>
      <h1>Blog</h1>
      <p>This is my blog page</p>
      <BlogPosts />
    </Layout>
  )
}

export default Blog;