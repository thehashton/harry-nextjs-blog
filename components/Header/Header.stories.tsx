import React from "react";
import Header from ".";
import { HeaderProps } from "./Header.types";

export default {
    children: '',
    title: 'Component/Header',
    component: Header,
  };
  
  const Template = (args: HeaderProps) => (
    <Header {...args}><></></Header>
  );
  
  const props = {
    defaultProps: (): HeaderProps => ({
      className: 'header',
    }),
  };
  
  export const HeaderStory: any = Template.bind({});
  const defaultProps = props.defaultProps();
  HeaderStory.storyName = 'Default';
  HeaderStory.args = {
    ...defaultProps,
  };