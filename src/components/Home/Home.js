import React, {useMemo} from "react";
import Welcome from "./WelcomePage/Welcome";
import HomeView from "./HomeView/HomeView";
import WelcomeMap from "./HomeMap/WelcomeMap";
import WelcomeNews from "./HomeNews/WelcomeNews";
import WelcomeText from "./WelcomePage/WelcomeText";
const Home = () => {
    useMemo(() => {
        window.scrollTo({top: 0})
      },)
    return (
        <>
            <div className="vh-100">
                <HomeView />
            </div>
            <WelcomeText />
            <div style={{
                backgroundColor: '#8b9472',
            }}>
            <Welcome />
            </div>
            <div style={{
                backgroundColor: '#F7F1DB',
            }}>
                <WelcomeMap />

                <WelcomeNews />
            </div >
        </>
    );
};

export default Home;