import React from "react";
import { Image } from "react-bootstrap";
import ZooMap from "../../assets/ZooMap.jpg";
import Species from "./Species";



const Map = () => {
    return (
        <>

            <div className="text-center" style={{marginTop: '10rem'}}>
                <h1 style={{ fontSize: 150, fontFamily: "Just Another Hand" }}>Saigon Zoo Map</h1>
                <p style={{ marginTop: '17px', fontSize: '2rem', textAlign: "center", marginLeft:'15rem', marginRight:'15rem' }}>Want to know what awaits you? Check out the overview here for a taste of what to expect on your visit to Saigon Zoo.</p>
            </div>
            <center><Image style={{ borderWidth: 60 }} src={ZooMap} alt="zoo-map" fluid ></Image></center>
            <Species />
        </>
    );
};

export default Map;