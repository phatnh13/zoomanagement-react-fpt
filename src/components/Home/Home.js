import React from "react";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
import HomeMenu from "./HomeMenu/HomeMenu";
import WelcomeMap from "./HomeMap/WelcomeMap";
import WelcomeNews from "./HomeNews/WelcomeNews";
const Home = () => {
    return (
        <>
        
        <div className="vh-100">
            
            <HomeView />
            </div>
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