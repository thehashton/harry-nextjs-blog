import { Card, styled } from "@mui/material";
import React from "react";

export const BlogPostCard = styled(Card)`
  background: rgba(25,25,25,0.95);
  height: 100%;
  padding: 20px;
  color: white;
`;

const HeadPost = ({ meta, isBlogPost }) => (
    <BlogPostCard>
      <h1 className={isBlogPost? 'great-title' : ''} >{meta.title}</h1>
      <div className='details'>
      {
          isBlogPost? null: <p>{meta.description}</p>
      }  
        <span>{meta.date}</span>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
        <div style={{marginTop: "30px"}}>{children}</div>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f39c12;
          }
          .great-title {
              font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </BlogPostCard>
  )

  export default HeadPost;
  