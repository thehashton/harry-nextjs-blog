import HeadPost from '../HeadPost/'

const BlogPost = ({ children, meta}) => {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}

export default BlogPost;