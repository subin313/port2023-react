import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import Contact from "../components/Contact";

const HomeView = () => {
    return(
        <>
        <Skip/>
        <Header/>
        <Main>
            <Intro/>
            <Skill/>
            <Site/>
            <Port/>
            <Contact/>
        </Main>
        <Footer/>
        </>
    );
};

export default HomeView;