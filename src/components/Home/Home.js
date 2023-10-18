import React from "react";
import "./Home.css";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
const Home = () => {
    return (
        <>
            <HomeView />
            <Welcome />
        </>
    );
};

export default Home;