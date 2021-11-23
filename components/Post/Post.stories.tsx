import React from "react";
import Post from ".";

export default {
    children: '',
    title: 'Component/Post',
    component: Post,
  };
  
  const Template = () => (
    <Post post={undefined} />
  );
  
  const props = {
    defaultProps: () => ({
      link: 3,
    }),
  };
  
  export const PostStory: any = Template.bind({});
  const defaultProps = props.defaultProps();
  PostStory.storyName = 'Default';
  PostStory.args = {
    ...defaultProps,
  };