import { NextPage } from "next";
import React from "react";
import styles from '../../styles/Home.module.css'

const About: NextPage = () => {
    return (
    <div className={styles.container}>
        <h1>About me</h1>
        <p>My name's Harry, I'm a UI/Accessibility Engineer from the UK. I also make YouTube educational videos about the web/coding on my channel called Curious Byte.</p>
    </div>
    )
}

export default About;