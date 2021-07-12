import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText,CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';

const AllergyPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Allergy detector</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( We will suggest you Best Menu)</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/bot.png" className="mr-4 img-fluid"></img>ALLERGY DETECTOR</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}>Most of us are allergic to certain foods that might lead to serious health implications. Thus naaniz collects the </CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext">data of allergic substances and the allergic foods of the users and keep a track of your intakes. We also provide the users with those food recommendations that does not contain the allergic foods. We also alert the users with an intimation if they buy the allergic food that the food they brought is allergic to their body.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src="/assets/images/allergy.png" className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Health Implications</CardTitle>
                            <CardText className="cardtext">Most of us are allergic to certain foods that might lead to</CardText>
                            <Collapse isOpen={false}>
                                <p className="cardtext"></p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card className="card2 card3">
                        <CardBody className="cardbody3">
                            <img alt="t" src="/assets/images/youtube.png" width="95px" height="65px" className="mt-4 ml-2"></img>
                        </CardBody>
                        <div className="overlay"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Best Menu for You</CardTitle>
                            <CardText className="cardtext">We also provide the users with those food recommendations</CardText>
                            <Collapse isOpen={false}>
                                <p className="cardtext">that does not contain the allergic foods.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                </div>
                </div>
                <div className="container" style={{"marginTop":"100px"}}>
                <div className="row row-content mb-5">
                    <p className="customtext">Most of us are allergic to certain foods that might lead to serious health implications. You might be allergic to certain dishes or food ingredients.<br /> Thus, naaniz collects the data of allergic substances and the allergic foods of the users and keep a track of your intakes.<br /> We also provide the you with those food recommendations that does not contain the allergic foods.<br /> We also alert you with an intimation if they buy the allergic food that the food they brought is allergic to their body.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        );
}

export default AllergyPage;
