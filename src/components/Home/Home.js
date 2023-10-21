import React from "react";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
import HomeMenu from "./HomeMenu/HomeMenu";
const Home = () => {
    return (
        <>
        
        <div className="vh-100">
            
            <HomeView />
            </div>
            <div className="vh-100">
            <Welcome />
            </div>
            <HomeMenu />
        </>
    );
};

export default Home;