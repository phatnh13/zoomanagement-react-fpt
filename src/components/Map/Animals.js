import React, { useEffect, useState } from "react";
import { Image, Card, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import RingTailedLemur from '../../assets/Ring-tailed-lemur.jpg';
import RingTailedLemur2 from '../../assets/vuon-cao-2.jpg';
import WhiteRhinoceros from '../../assets/te-giac-31.jpg';
import WhiteRhinoceros2 from '../../assets/te-giac-21.jpg';
import GreaterKudu from '../../assets/linh-duong-sung-xoan2.jpg';
import GreaterKudu2 from '../../assets/linh-duong-sung-xoan-22.jpg';
import Gemsbok from '../../assets/gemsbok-1.jpg';
import Gemsbok2 from '../../assets/gemsbok-2.jpg';
import BlueWildebeest from '../../assets/linh-duong-dau-bo1.jpg';
import BlueWildebeest2 from '../../assets/linh-duong-dau-bo2.jpg';
import SquirrelMonkey from '../../assets/khi-soc-41.jpg';
import SquirrelMonkey2 from '../../assets/khi-soc-22.jpg';
import Giraffe from '../../assets/huou-cao-co-42.jpg';
import Giraffe2 from '../../assets/huou-cao-co-22.jpg';
import Hippo from '../../assets/ha-ma2.jpg';
import Hippo2 from '../../assets/ha-ma.jpg';
import ScarletIbis from '../../assets/co-do-21.jpg';
import ScarletIbis2 from '../../assets/co-do-11.jpg';


const Animals = () => { 
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/species');
                const responseData = await response.json();
                setSpecies(responseData);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchSpecies();
    }, [])

    return (
        <>
            <Accordion style={{
                alignItems: "center",
                marginTop: '4rem',
                marginLeft: '7rem',
                marginRight: '7rem', 
                marginBottom: '3rem'
            }} className="md-auto" defaultActiveKey={['0']} fluid>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>RING-TAILED LEMUR</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col md={6} className="mb-2">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image src={RingTailedLemur} alt="ring-tailed-lemur" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 500 }} src={RingTailedLemur2} alt="ring-tailed-lemur-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
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
                    <Accordion.Header>WHITE RHINOCEROS</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image src={WhiteRhinoceros} alt="White-Rhinoceros" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 500 }} src={WhiteRhinoceros2} alt="White-Rhinoceros-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Rhinocerotidae</p>
                                        <p><strong>Information:</strong> The white rhinoceros, white rhino or square-lipped rhinoceros (Ceratotherium simum) is the largest extant species of rhinoceros. It has a wide mouth used for grazing and is the most social of all rhino species. The white rhinoceros consists of two subspecies: the southern white rhinoceros, with an estimated 15,942 wild-living animals in the year 2018,[3] and the much rarer northern white rhinoceros. The northern subspecies has very few remaining individuals, with only two confirmed left in 2018 (two females: Fatu, 18 and Najin, 29), both in captivity. Sudan, the world's last known male Northern white rhinoceros, died in Kenya on 19 March 2018 at age 45.</p>
                                        <p><strong>Characteristic: </strong> The white rhinoceros is the largest of the five living species of rhinoceros. The head and body length is 3.7–4 m (12–13 ft) in males and 3.4–3.65 m (11.2–12.0 ft) in females, with the tail adding another 70 cm (28 in) and the shoulder height is 170–186 cm (5.58–6.10 ft) in the male and 160–177 cm (5.25–5.81 ft) in the female. The male, averaging about 2,300 kg (5,070 lb) is heavier than the female, at an average of about 1,700 kg (3,750 lb). Herbivore grazers that eat grass, preferring the shortest grains, the white rhinoceros is one of the largest pure grazers.</p>
                                        <p><strong>Allocation: </strong> White rhinos are found in grassland and savannah habitat.</p>
                                        <p><strong>Ecological: </strong> White rhinos live in crashes or herds of up to 14 animals (usually mostly female). Sub-adult bulls will congregate, often in association with an adult cow. Most adult bulls are solitary. Dominant bulls mark their territory with excrement and urine.[36] The dung is laid in well defined piles. It may have 20 to 30 of these piles to alert passing white rhinos that it is his territory. Another way of marking their territory is wiping their horns on bushes or the ground and scraping with their feet before urine spraying. They do this around ten times an hour while patrolling territory. The same ritual as urine marking except without spraying is also commonly used. The territorial male will scrape-mark every 30 m (100 ft) or so around its territory boundary. Subordinate males do not mark territory. The most serious fights break out over mating rights with a female. Female territory overlaps extensively, and they do not defend it.</p>
                                        <p><strong>Diet: </strong> It drinks twice a day if water is available, but if conditions are dry it can live four or five days without water. It spends about half of the day eating, one-third resting, and the rest of the day doing various other things. They eat mostly grass.</p>
                                        <p><strong>Breeding and reproduction: </strong> Breeding pairs stay together between 5–20 days before they part their separate ways. The gestation period of a white rhino is 16 months.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>GREATER KUDU</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image style={{ width: 500 }} src={GreaterKudu} alt="greater-kudu" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={GreaterKudu2} alt="greater-kudu-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Bovidae</p>
                                        <p><strong>Information:</strong> The greater kudu (Tragelaphus strepsiceros) is a large woodland antelope, found throughout eastern and southern Africa. Despite occupying such widespread territory, they are sparsely populated in most areas due to declining habitat, deforestation, and poaching. The greater kudu is one of two species commonly known as kudu, the other being the lesser kudu, T. imberbis.</p>
                                        <p><strong>Characteristic: </strong> Greater kudus have a narrow body with long legs, and their coats can range from brown/bluish gray to reddish brown. They possess between 4 and 12 vertical white stripes along their torso. The head tends to be darker in color than the rest of the body, and exhibits a small white chevron which runs between the eyes. The bulls also have beards running along their throats, and large horns with two and a half twists, which, were they to be straightened, would reach an average length of 120 cm (47 in), with the record being 187.64 cm (73.87 in).</p>
                                        <p><strong>Allocation: </strong> The range of the greater kudu extends from the east in Ethiopia, Tanzania, Eritrea and Kenya into the south where they are found in Zambia, Angola, Namibia, Botswana, Zimbabwe and South Africa.</p>
                                        <p><strong>Ecological: </strong> Their habitat includes mixed scrub woodlands (the greater kudu is one of the few largest mammals that prefer living in settled areas – in scrub woodland and bush on abandoned fields and degraded pastures, mopane bush and acacia in lowlands, hills and mountains. They will occasionally venture onto plains only if there is a large abundance of bushes, but normally avoid such open areas to avoid becoming an easy target for their predators.</p>
                                        <p><strong>Diet: </strong> Their diet consists of leaves, grass, shoots and occasionally tubers, roots and fruit (they are especially fond of oranges and tangerines).</p>
                                        <p><strong>Breeding and reproduction: </strong> The mating season occurs at the end of the rainy season, which can fluctuate slightly according to the region and climate.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>GEMSBOK</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image style={{ width: 380 }} src={Gemsbok} alt="gemsbok" />
                                                </Carousel.Item>
                                                <Carousel.Item >
                                                    <Image style={{ width: 500 }} src={Gemsbok2} alt="gemsbok-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Bovidae</p>
                                        <p><strong>Information:</strong> The gemsbok or South African oryx (Oryx gazella) is a large antelope in the genus Oryx. It is native to the extremely dry, arid regions of Southern Africa; notably, the Kalahari and Namib Desert. Some authorities formerly classified the East African oryx (Oryx beisa) as a subspecies.</p>
                                        <p><strong>Characteristic: </strong> Gemsbok are light taupe to tan in color, with lighter patches toward the bottom rear of the rump. Their tails are long and black in color. A blackish stripe extends from the chin down the lower edge of the neck, through the juncture of the shoulder and leg along the lower flank of each side to the blackish section of the rear leg.</p>
                                        <p><strong>Allocation: </strong> Gemsbok are found in arid and semi-arid bushlands in southwestern Africa, especially around the Namib and Kalahari deserts, in Botswana, Zimbabwe, Namibia, South Africa and formerly Angola (where they are considered extirpated).</p>
                                        <p><strong>Ecological: </strong> Gemsbok live in herds of about 10–40 animals, which consist of a dominant male, a few nondominant males, and females. They are mainly desert-dwelling and do not depend on drinking water to supply their physiological needs. They can reach running speeds of up to 60 km/h (37 mph). Gemsbok are mostly crepuscular in nature, since temperatures are tolerable and predator detection rates are highest during these times.</p>
                                        <p><strong>Diet: </strong> The gemsbok is generally a grazer but changes to browsing during the dry season or when grass is sparse. It may dig up to a meter deep to find roots and tubers, supplementing its water intake by eating wild tsamma melons and cucumbers, which can provide all the water required (3 liters per 100 kg bodyweight and day).</p>
                                        <p><strong>Breeding and reproduction: </strong> The gemsbok has no specified breeding season, but the young in a given herd tend to be of a similar age due to reproductive synchrony between females.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>BLUE WILDEBEEST</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image src={BlueWildebeest} alt="blue-wildebeest" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 500 }} src={BlueWildebeest2} alt="blue-wildebeest-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Bovidae</p>
                                        <p><strong>Information:</strong> The blue wildebeest (Connochaetes taurinus), also called the common wildebeest, white-bearded gnu or brindled gnu, is a large antelope and one of the two species of wildebeest. It is placed in the genus Connochaetes and family Bovidae, and has a close taxonomic relationship with the black wildebeest. The blue wildebeest is known to have five subspecies.</p>
                                        <p><strong>Characteristic: </strong> This broad-shouldered antelope has a muscular, front-heavy appearance, with a distinctive, robust muzzle. Young blue wildebeest are born tawny brown, and begin to take on their adult coloration at the age of 2 months. The adults' hues range from a deep slate or bluish-gray to light gray or even grayish-brown. Both sexes possess a pair of large curved horns.</p>
                                        <p><strong>Allocation: </strong> The blue wildebeest is native to Kenya, Tanzania, Botswana, Zambia, Zimbabwe, Mozambique, South Africa, Eswatini, and Angola. Today, it is extinct in Malawi, but has been successfully reintroduced into Namibia.</p>
                                        <p><strong>Ecological: </strong> The blue wildebeest is mostly active during the morning and the late afternoon, with the hottest hours of the day being spent in rest. These extremely agile and wary animals can run at speeds up to 80 km/h (50 mph), waving their tails and tossing their heads. An analysis of the activity of blue wildebeest at the Serengeti National Park showed that the animals devoted over half of their total time to rest, 33% to grazing, 12% to moving about (mostly walking), and a little to social interactions. However, variations existed among different age and sex groups.</p>
                                        <p><strong>Diet: </strong> The blue wildebeest is a herbivore, feeding primarily on the short grasses which commonly grow on light, and alkaline soils that are found in savanna grasslands and on plains.</p>
                                        <p><strong>Breeding and reproduction: </strong> Male blue wildebeest become sexually mature at about 2 years of age, while females can conceive at 16 months if adequately nourished. The mating season, which lasts for about 3 weeks, coincides with the end of the rainy season.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>COMMON SQUIRREL MONKEY</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image src={SquirrelMonkey} alt="squirrel-monkey" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 500 }} src={SquirrelMonkey2} alt="squirrel-monkey-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Cebidae</p>
                                        <p><strong>Information:</strong> Squirrel monkeys are New World monkeys of the genus Saimiri. Saimiri is the only genus in the subfamily Saimirinae. The name of the genus is of Tupi origin (sai-mirím or çai-mbirín, with sai meaning 'monkey' and mirím meaning 'small')[3] and was also used as an English name by early researchers.</p>
                                        <p><strong>Characteristic: </strong> A squirrel monkey's fur is short and close, coloured black at the shoulders and yellowish orange on its back and extremities. The upper parts of their heads are hairy.</p>
                                        <p><strong>Allocation: </strong> Squirrel monkeys live in the tropical forests of Central and South America in the canopy layer. Most species have parapatric or allopatric ranges in the Amazon, while S. oerstedii is found disjunctly in Costa Rica and Panama.</p>
                                        <p><strong>Ecological: </strong> Squirrel monkeys live together in multi-male/multi-female groups with up to 500 members. These large groups, however, can occasionally break into smaller troupes. The groups have a number of vocal calls, including warning sounds to protect the group from large falcons, which are a natural threat. Their small body size also makes them susceptible to predators such as snakes and felids. For marking territory, squirrel monkeys rub their tail and their skin with their own urine.</p>
                                        <p><strong>Diet: </strong> Squirrel monkeys are omnivores that eat insects, eggs, and small vertebrate animals, in addition to various fruits, flowers, and tender leaves.</p>
                                        <p><strong>Breeding and reproduction: </strong> Squirrel monkey mating is subject to seasonal influences. Squirrel monkeys reach sexual maturity at ages of 2–2.5 years for females and age 3.5–4 years for males.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>GIRAFFE</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image style={{ width: 500 }} src={Giraffe} alt="giraffe" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={Giraffe2} alt="giraffe-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Giraffidae</p>
                                        <p><strong>Information:</strong> The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into up to eight extant species due to new research into their mitochondrial and nuclear DNA, as well as morphological measurements. Seven other extinct species of Giraffe are known from the fossil record.</p>
                                        <p><strong>Characteristic: </strong> Fully grown giraffes stand 4.3–5.7 m (14–19 ft) tall, with males taller than females. The average weight is 1,192 kg (2,628 lb) for an adult male and 828 kg (1,825 lb) for an adult female. Despite its long neck and legs, its body is relatively short: 66  The skin is mostly gray, or tan, and can reach a thickness of 20 mm (0.79 in): 87  The 80–100 cm (31–39 in) long tail ends in a long, dark tuft of hair and is used as a defense against insects.</p>
                                        <p><strong>Allocation: </strong> Giraffes usually inhabit savannah and woodlands.</p>
                                        <p><strong>Ecological: </strong> Giraffes prefer areas dominated by Acacieae, Commiphora, Combretum and Terminalia trees over Brachystegia which are more densely spaced. The Angolan giraffe can be found in desert environments. During the wet season, food is abundant and giraffes are more spread out, while during the dry season, they gather around the remaining evergreen trees and bushes.</p>
                                        <p><strong>Diet: </strong> Their food source is leaves, fruits, and flowers of woody plants, primarily acacia species, which they browse at heights most other herbivores cannot reach.</p>
                                        <p><strong>Breeding and reproduction: </strong> Females can reproduce throughout the year and experience oestrus cycling approximately every 15 days.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>HIPPOPOTAMUS</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image src={Hippo} alt="hippopotamus" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 500 }} src={Hippo2} alt="hippopotamus-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Hippopotamidae</p>
                                        <p><strong>Information:</strong> The hippopotamus, also shortened to hippo, further qualified as the common hippopotamus, Nile hippopotamus, or river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis). Its name comes from the ancient Greek for "river horse".</p>
                                        <p><strong>Characteristic: </strong>  The hippopotamus has a bulky body on stumpy legs, an enormous head, a short tail, and four toes on each foot. Each toe has a nail-like hoof. Males are usually 3.5 meters (11.5 feet) long, stand 1.5 meters (5 feet) tall, and weigh 3,200 kg (3.5 tons).</p>
                                        <p><strong>Allocation: </strong> Hippos inhabit rivers, lakes, and mangrove swamps.</p>
                                        <p><strong>Ecological: </strong> Hippos are semiaquatic and require enough water to immerse in, while being close to grass. They prefer relatively still waters with gently sloping shores, though male hippos may also be found in very small numbers in more rapid waters with rocky slopes. Hippos mostly live in freshwater habitat, but can be found in estuaries.</p>
                                        <p><strong>Diet: </strong>  Hippos are primarily herbivorous, meaning they eat only plants, but they have been observed to engage in omnivorous behavior.</p>
                                        <p><strong>Breeding and reproduction: </strong> Breeding occurs year round, but peaks between February and August.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>SCARLET IBIS</Accordion.Header>
                    <Accordion.Body className="vc_tta-panel-body" >
                        <Card className="vc_row wpb_row vc_inner row">
                            <Card.Body className="d-flex">
                                <Col className="col-md-6">
                                    <center>
                                        <div>
                                            <Carousel fade>
                                                <Carousel.Item interval={1000}>
                                                    <Image style={{ width: 500 }} src={ScarletIbis} alt="scarlet-ibis" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image style={{ width: 400 }} src={ScarletIbis2} alt="scarlet-ibis-2" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                    </center>
                                </Col>
                                <Col className="col-md-6">
                                    <Card.Text  >
                                        <p><strong>Family: </strong> Threskiornithidae</p>
                                        <p><strong>Information:</strong> The scarlet ibis (Eudocimus ruber) is a species of ibis in the bird family Threskiornithidae. It inhabits tropical South America and part of the Caribbean. In form, it resembles most of the other twenty-seven extant species of ibis, but its remarkably brilliant scarlet coloration makes it unmistakable. It is one of the two national birds of Trinidad and Tobago, and its Tupi–Guarani name, guará, is part of the name of several municipalities along the coast of Brazil.</p>
                                        <p><strong>Characteristic: </strong> Appropriately named, the scarlet ibis' plumage is a vibrant scarlet color. Feathers may show variations in tints and shades but the overall hue is bright pink with rich black or dark blue wingtips. Young birds are grayish-brown with pale undersides.</p>
                                        <p><strong>Allocation: </strong> The range of the scarlet ibis is very large, and colonies are found throughout vast areas of South America and the Caribbean islands.</p>
                                        <p><strong>Ecological: </strong> The scarlet ibis is a sociable and gregarious bird, and very communally-minded regarding the search for food and the protection of the young. They live in flocks of thirty or more. Members stay close, and mating pairs arrange their nests in close proximity to other pairs in the same tree. For protection, flocks often congregate in large colonies of several thousand individuals. They also regularly participate in mixed flocks, gaining additional safety through numbers: storks, spoonbills, egrets, herons and ducks are all common companions during feedings and flights.</p>
                                        <p><strong>Diet: </strong> The Scarlet Ibis is primarily a carnivorous bird, and its diet mainly consists of crustaceans (such as crabs and shrimps), small fish, and aquatic insects.</p>
                                        <p><strong>Breeding and reproduction: </strong> Typically breeding occurs from September through December.</p>
                                    </Card.Text>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default Animals;