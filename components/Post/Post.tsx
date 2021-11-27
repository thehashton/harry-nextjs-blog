import Link from "next/link";
import HeadPost from "../HeadPost";

const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article style={{zIndex: '-2'}}>
      <Link href={"/blog" + link}>
        <a><HeadPost meta={meta} isBlogPost={undefined} /></a>
      </Link>
    </article>
  );
};

export default Post;