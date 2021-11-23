import React from "react";
import Hero from ".";

export default {
    children: '',
    title: 'Component/Hero',
    component: Hero,
  };
  
  const Template = () => (
    <Hero />
  );
  
  const props = {
    defaultProps: () => ({
      className: 'Hero',
    }),
  };
  
  export const HeroStory: any = Template.bind({});
  const defaultProps = props.defaultProps();
  HeroStory.storyName = 'Default';
  HeroStory.args = {
    ...defaultProps,
  };