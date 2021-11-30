import React from "react";
import Header from ".";

export default {
    children: '',
    title: 'Component/Header',
    component: Header,
  };
  
  const Template = (args) => (
    <Header {...args}><></></Header>
  );
  
  const props = {};
  
  export const HeaderStory: any = Template.bind({});
  const defaultProps = props;
  HeaderStory.storyName = 'Default';
  HeaderStory.args = {
    ...defaultProps,
  };