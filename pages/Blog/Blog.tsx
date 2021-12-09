import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import BlogPosts from "./BlogPosts";
import Image from 'next/image'
import { BlogBlueTubeCircularShape, BlogHero, BlogHeroText } from "./Blog.styled";

const Blog: NextPage = () => {
  return (
    <Layout pageTitle="Blog" description={"blog"}>
      <BlogHero>
        <BlogHeroText>
          <h1>Blog</h1>
          <p>This is my blog page</p>
        </BlogHeroText>
        <BlogBlueTubeCircularShape>
          <Image src="/Images/Site/Tube_Short_Thin.png" height="300px" width="300px" />
        </BlogBlueTubeCircularShape>
      </BlogHero>
      <BlogPosts />
    </Layout>
  )
}

export default Blog;