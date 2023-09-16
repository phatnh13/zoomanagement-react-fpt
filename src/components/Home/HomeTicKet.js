import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ElephenImg from "../../assets/elephant.jpg";
import GiraffeImg from "../../assets/giraffe.jpg";

const HomeTicKet = () => {
    return (
        <div className="home-ticket">
            <Container>
                <div className="home-ticket__content">
                    <div className="home-ticket__content__title d-flex flex-row justify-content-between">
                        <p>TICKET</p>
                        <div className="btn btn-success">
                            <Link className="nav-link" to="/ticket-price">View All Price</Link>
                        </div>
                    </div>
                    <div className="home-ticket__content__img d-flex justify-content-between">
                        <div className="home-ticket__content__img__item">
                            <Image src={ElephenImg} alt="Elephen" />
                            
                        </div>
                        <div className="home-ticket__content__img__item">
                            <Image src={GiraffeImg} alt="Giraffe" />
                            <div className="home-ticket__content__img__item__price">
                                <p>From 1.4$ - 2$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomeTicKet;