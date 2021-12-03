import Link from "next/link";
import React from "react";
import HeadPost from "../HeadPost";
import { PostArticle } from "./Post.styled";

const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <PostArticle style={{zIndex: '2'}}>
      <Link href={"/blog"+link}>
        <a><HeadPost meta={meta} isBlogPost={undefined} /></a>
      </Link>
    </PostArticle>
  );
};

export default Post;