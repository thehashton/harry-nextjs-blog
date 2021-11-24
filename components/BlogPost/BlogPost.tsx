import React from 'react';
import { Container } from '../../styles/Global.styled';
import HeadPost from '../HeadPost/'

const BlogPost = ({ children, meta}) => {
  return (
    <>
      <Container>
        <HeadPost meta={meta} isBlogPost />
        <article>{children}</article>
      </Container>
    </>
  )
}

export default BlogPost;