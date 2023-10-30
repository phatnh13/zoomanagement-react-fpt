import React from "react";
import { Image, Card } from "react-bootstrap";
import ZooMap from "../../assets/ZooMap.jpg";
import Gate from "../../assets/gate.JPG"
import Species from "./Species";



const Map = () => {
    return (
        <>
            <div style={{ backgroundColor: '#F7F1DB' }}>
                <Card.Img src={Gate} alt="gate-background" style={{ height: '15rem' }} />
                <div className="text-center" >
                    <h1 style={{ fontSize: 150, fontFamily: "Just Another Hand" }}>Saigon Zoo Map</h1>
                    <p style={{ marginTop: '2rem', fontSize: '2rem' }}>Want to know what awaits you? Check out the overview here for a taste of what to </p>
                    <p style={{ fontSize: '2rem' }}>expect on your visit to Saigon Zoo.</p>
                </div>
                <center><Image style={{ borderWidth: 60 }} src={ZooMap} alt="zoo-map" fluid ></Image></center>
                <Species />
            </div>
        </>
    );
};

export default Map;