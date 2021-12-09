import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { CourseHeader, CourseHeroText, CoursesTriangleShape } from "./Courses.styled";
import Image from 'next/image'

const Courses: NextPage = () => {
    return (
    <Layout pageTitle="Courses" description="Courses by me">
        <CourseHeader>
          <CourseHeroText>
            <h1>Courses</h1>
            <h2>Level up as a developer.</h2>
            <h2>Invest in yourself with a premium dev course.</h2>
          </CourseHeroText>
          <CoursesTriangleShape>
            <Image src="/Images/Site/Pyramid_Tall.png" height="400px" width="400px" />
          </CoursesTriangleShape>
        </CourseHeader>
        <p>These are some courses I've created:</p>
    </Layout>
    )
}

export default Courses;