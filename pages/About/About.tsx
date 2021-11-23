import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 0;
  margin: 0 10vw;
`;

const About: NextPage = () => {
    return (
    <Container>
        <h1>About me</h1>
        <p>My name's Harry, I'm a UI/Accessibility Engineer from the UK. I also make YouTube educational videos about the web/coding on my channel called Curious Byte.</p>
    </Container>
    )
}

export default About;