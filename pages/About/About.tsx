import { NextPage } from "next";
import React from "react";
import Layout from "../../components/Layout";

const About: NextPage = () => {
    return (
    <Layout pageTitle="About" description="About me">
        <h1>About me</h1>
        <p>My name's Harry, I'm a UI/Accessibility Engineer from the UK. I also make YouTube educational videos about the web/coding on my channel called Curious Byte.</p>
    </Layout>
    )
}

export default About;