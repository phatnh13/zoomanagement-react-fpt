import React from "react";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
<<<<<<< HEAD
import WelcomeMap from "./HomeMap/WelcomeMap";
import WelcomeNews from "./HomeNews/WelcomeNews";
=======
import HomeMenu from "./HomeMenu/HomeMenu";
>>>>>>> 062cb4d916d5065213397a8b29bbb7cd21051756
const Home = () => {
    return (
        <>
        
        <div className="vh-100">
            
            <HomeView />
            </div>
            <Welcome />
<<<<<<< HEAD
            <div style={{
                backgroundColor: '#F7F1DB',
            }}>
            < WelcomeMap />

            <WelcomeNews />
        </div >
=======
            <HomeMenu />
>>>>>>> 062cb4d916d5065213397a8b29bbb7cd21051756
        </>
    );
};

export default Home;