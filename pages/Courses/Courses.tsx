import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import Image from 'next/image'
import { CourseCards, CourseHeader, CourseHeroText, CoursesTriangleShape } from "../../styles/Pages/Courses/Courses.styled";
import Card from "../../components/Card";
import CourseData from "../../Data/Course/CourseData";

const Courses: NextPage = () => {
    return (
    <Layout pageTitle="Courses" description="Courses by me">
        <CourseHeader>
          <CourseHeroText>
            <h1>Courses</h1>
            <h2><i>Level up your UI/Frontend knowledge.</i> Here's some courses I've created:</h2>
          </CourseHeroText>
          <CoursesTriangleShape>
            <Image src="/Images/Site/Pyramid_Tall.png" height="400px" width="400px" />
          </CoursesTriangleShape>
        </CourseHeader>
        <CourseCards>
          {CourseData.map((CourseCard, index) => {
            return (
              <Card.Course key={index} link={CourseCard.link} title={CourseCard.title} description={CourseCard.description} />
            )
          })}
        </CourseCards>
    </Layout>
    )
}

export default Courses;