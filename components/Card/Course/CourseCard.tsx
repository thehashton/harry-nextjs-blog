import React from 'react';
import { CourseCardDescription, CourseCardTitle, CourseCardWrapper } from './CourseCard.styled';
import { CourseCardProps } from './CourseCard.types';

const CourseCard = (props: CourseCardProps) => {
    const { title, description, link } = props;

    return (
        <CourseCardWrapper href={link}>
            <CourseCardTitle>{title}</CourseCardTitle>
            <CourseCardDescription>{description}</CourseCardDescription>
        </CourseCardWrapper>
    )
}

export default CourseCard;