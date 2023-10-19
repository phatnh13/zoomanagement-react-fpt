import React from "react";
import "./Home.css";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
const Home = () => {
    return (
        <>
        <div className="vh-100">
            <HomeView />
            </div>
            <Welcome />
        </>
    );
};

export default Home;