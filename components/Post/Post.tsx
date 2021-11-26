import Link from "next/link";
import HeadPost from "../HeadPost";

const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article>
      <HeadPost meta={meta} isBlogPost={undefined} />
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};

export default Post;