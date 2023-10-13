import React from "react";
import Giraffe from "../../assets/giraffe.jpg";
import { Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <div className="welcome-text__top vh-100">
                <div className="welcome-text__information">Welcome to Saigon Zoo</div>
                <div className="about-zoo__information">Saigon Zoo is one of the buildings with the oldest history in Ho Chi Minh. Saigon Zoo is currently home to 590 animals of 125 species, 1,800 plants of 260 species; 23 species of domestic orchids; 33 species of cacti, 34 species of ornamental plants, green grass, etc.</div>
                
                <div className="d-flex justify-content-end">
                <Button className="btn-view-all-price"><Link className="link-underline-opacity-0 link-underline link-light" to="/buyingticket">View all price</Link></Button>
                </div>

                <Row className="view-price__welcome mt-3">
        
                        <Image className="image-price bg-image col-md-6" src={Giraffe} />


                        <Image className="image-price bg-image col-md-6" src={Giraffe} />
         
                </Row>
            </div>
        </>
    )

}
export default Welcome;