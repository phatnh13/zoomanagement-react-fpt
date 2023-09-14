import React from "react";
import TigerImg from "../assets/Tigerbackground.png";
import WebLogo from "../assets/WebLogo.png";

const Home = () => {
    return (
        <>
            <div className="header-img">
                <div className="logo-box">
                    <div className="logo">
                        <div className="text-logo-top">VietNam Zoo</div>
                        <div className="text-logo-down">Since 1864</div>
                        <img className="web-logo" alt="WebLogo" src={WebLogo} />
                    </div>
                </div>
                <img className="tiger-backgroud" alt="Tiger" src={TigerImg} />
            </div>
        </>
    );
};

export default Home;