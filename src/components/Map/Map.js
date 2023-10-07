import React from "react";
import { Image, Card, Row, Col } from "react-bootstrap";
import ZooMap from "../../assets/ZooMap.jpg";
import Accordion from 'react-bootstrap/Accordion';
import RingTailedLemur from '../../assets/Ring-tailed-lemur.jpg';

const Map = () => {
    return (
        <>
            <div className="text-center">
                <h1>Saigon Zoo Map</h1>
            </div>
            <center><Image src={ZooMap} alt="zoo-map" fluid ></Image></center>
            <hr />
            <Accordion className="md-auto" defaultActiveKey={['0']} alwaysOpen fluid>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ring-Tailed-Lemur</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <div><Image src={RingTailedLemur} alt="Ring-Tailed-Lemur"></Image> </div>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Lemuridae</p>
                                        <p><strong>Information:</strong> The ring-tailed lemur (Lemur catta) is a medium- to larger-sized strepsirrhine (wet-nosed) primate, and the most internationally-recognized lemur species, owing to its long, black-and-white, ringed tail. It belongs to Lemuridae, one of five lemur families, and is the only member of the Lemur genus. Like all lemurs, it is endemic to the island of Madagascar, where it is endangered.</p>
                                        <p><strong>Characteristic: </strong> The species has a slender frame and narrow face, fox-like muzzle.[3] The ring-tailed lemur's trademark—a long, bushy tail—is ringed in alternating black and white transverse bands, numbering 12 or 13 white rings and 13 or 14 black rings, and always ending in a black tip.[3][25] The total number of rings nearly matches the approximate number of caudal vertebrae (~25).[26] Its tail is longer than its body[25] and is not prehensile. Instead, it is only used for balance, communication, and group cohesion.</p>
                                        <p><strong>Allocation: </strong> Endemic to southern and southwestern Madagascar.</p>
                                        <p><strong>Ecological: </strong> The ring-tailed lemur ranges further into highland areas than other lemurs. It inhabits deciduous forests, dry scrub, montane humid forests, and gallery forests (forests along riverbanks). It strongly favors gallery forests, but such forests have now been cleared from much of Madagascar in order to create pasture for livestock.</p>
                                        <p><strong>Diet: </strong> The ring-tailed lemur is an opportunistic omnivore primarily eating fruits and leaves, particularly those of the tamarind tree (Tamarindus indica), known natively as kily.</p>
                                        <p><strong>Breeding and reproduction: </strong> The breeding season runs from mid-April to mid-May. Estrus lasts 4 to 6 hours,[18] and females mate with multiple males during this period.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default Map;