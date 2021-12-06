import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const MyMission: NextPage = () => {
    return (
    <Layout pageTitle="My Mission" description="My mission">
        <h1>My mission</h1>
        <p>My mission as a UI developer is to produce work that is exciting, empathetic and accessible.</p>
        <p>As an educator my aim to ensure that I share not just the hard skills needs for work on the web as a frontend engineer but also the soft skills.</p>
    </Layout>
    )
}

export default MyMission;