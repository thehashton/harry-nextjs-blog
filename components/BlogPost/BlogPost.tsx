const { motion } = require("framer-motion");
import React from 'react';
import { Container } from '../../styles/Global.styled';
import Footer from '../Footer';
import HeadPost from '../HeadPost/'

const BlogPost = ({ children, meta}) => {
  return (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },}}
      >
      <Container>
        <HeadPost meta={meta} isBlogPost />
        <article style={{fontSize: '1.2rem'}}>{children}</article>
      </Container>
    </motion.div>
  </>
  )
}

export default BlogPost;