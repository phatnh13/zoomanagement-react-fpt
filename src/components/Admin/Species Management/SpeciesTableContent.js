import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";

function SpeciesTableContent({ species, index }) {
    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{species.name}</Accordion.Header>
            <Accordion.Body>
                <p><strong>Family: </strong> Lemuridae</p>
                <p><strong>Information:</strong> The ring-tailed lemur (Lemur catta) is a medium- to larger-sized strepsirrhine (wet-nosed) primate, and the most internationally-recognized lemur species, owing to its long, black-and-white, ringed tail. It belongs to Lemuridae, one of five lemur families, and is the only member of the Lemur genus. Like all lemurs, it is endemic to the island of Madagascar, where it is endangered.</p>
                <p><strong>Characteristic: </strong> The species has a slender frame and narrow face, fox-like muzzle.[3] The ring-tailed lemur's trademark—a long, bushy tail—is ringed in alternating black and white transverse bands, numbering 12 or 13 white rings and 13 or 14 black rings, and always ending in a black tip.[3][25] The total number of rings nearly matches the approximate number of caudal vertebrae (~25).[26] Its tail is longer than its body[25] and is not prehensile. Instead, it is only used for balance, communication, and group cohesion.</p>
                <p><strong>Allocation: </strong> Endemic to southern and southwestern Madagascar.</p>
                <p><strong>Ecological: </strong> The ring-tailed lemur ranges further into highland areas than other lemurs. It inhabits deciduous forests, dry scrub, montane humid forests, and gallery forests (forests along riverbanks). It strongly favors gallery forests, but such forests have now been cleared from much of Madagascar in order to create pasture for livestock.</p>
                <p><strong>Diet: </strong> The ring-tailed lemur is an opportunistic omnivore primarily eating fruits and leaves, particularly those of the tamarind tree (Tamarindus indica), known natively as kily.</p>
                <p><strong>Breeding and reproduction: </strong> The breeding season runs from mid-April to mid-May. Estrus lasts 4 to 6 hours,[18] and females mate with multiple males during this period.</p>
                <Button variant="danger" className="me-2">Delete</Button>
                <Button variant="warning">Edit</Button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default SpeciesTableContent;