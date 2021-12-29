import React from "react";
import Card from "..";

export default {
    children: '',
    title: 'Component/Card/Course',
    component: Card,
  };
  
  const Template = (args) => (
    <Card.Course {...args} />
  );
  
  const props = {
    defaultProps: () => ({
      title: 'Card Title',
      description: 'Card Description',
      link: '#link'
    }),
  };
  
  export const CourseCardStory: any = Template.bind({});
  const defaultProps = props.defaultProps();
  CourseCardStory.storyName = 'Course Card';
  CourseCardStory.args = {
    ...defaultProps,
  };