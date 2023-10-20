import React from "react";
import "./Home.css";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
import WelcomeMap from "./HomeMap/WelcomeMap";
import WelcomeNews from "./HomeNews/WelcomeNews";
const Home = () => {
    return (
        <>
            <HomeView />
            <Welcome />
            <div style={{
                backgroundColor: '#F7F1DB',
            }}>
            < WelcomeMap />

            <WelcomeNews />
        </div >
        </>
    );
};

export default Home;