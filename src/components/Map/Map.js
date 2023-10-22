import React from "react";
import { Image } from "react-bootstrap";
import ZooMap from "../../assets/ZooMap.jpg";
import WebLogo from "../../assets/WebLogo.png";
import Animals from "./Animals";
import { Link } from "react-router-dom";



const Map = () => {
    return (
        <>

            <div className="text-center">
                <Link to='/'>
                    <div className="header-img">
                        <div className="logo-box">
                            <div className="logo">
                                <div className="text-logo-top">VietNam Zoo</div>
                                <div className="text-logo-down">Since 1864</div>
                                <img className="web-logo" alt="WebLogo" src={WebLogo} />
                            </div>
                        </div>
                    </div>
                </Link>
                <h1 style={{ fontSize: 150, fontFamily: "Just Another Hand" }}>Saigon Zoo Map</h1>
                <p style={{ marginTop: '17px', fontSize: '2rem', textAlign: "center", marginLeft:'15rem', marginRight:'15rem' }}>Want to know what awaits you? Check out the overview here for a taste of what to expect on your visit to Saigon Zoo.</p>
            </div>
            <center><Image style={{ borderWidth: 60 }} src={ZooMap} alt="zoo-map" fluid ></Image></center>
            <Animals />
        </>
    );
};

export default Map;