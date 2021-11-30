import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const Courses: NextPage = () => {
    return (
    <Layout pageTitle="Courses" description="Courses by me">
        <h1>Courses</h1>
        <p>These are some courses I've created:</p>
    </Layout>
    )
}

export default Courses;