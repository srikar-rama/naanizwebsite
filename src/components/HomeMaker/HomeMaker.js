import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';

const HomeMakerPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Homemaker Live Cooking</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( Get Live Session )</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/bot.png" className="mr-4 img-fluid"></img>Homemaker Live cooking</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}>When you play the video made by a home maker, we fetch the data from the live video and we can tell you the cost of</CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext"> the whole process of cooking starting from the ingredients of the dish till the utensils used in the video. We detect the no of head count in the video along with the ingredients and the utensils in the video. We also provide the links that direct you to buy the items and utensils in online platforms.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src="/assets/images/homemaker.png" className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Know how to cook</CardTitle>
                            <CardText className="cardtext">When you play the video made by a home maker, we fetch the </CardText>
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
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Get Ingredients details also</CardTitle>
                            <CardText className="cardtext">We detect the no of head count in the video along with the</CardText>
                            <Collapse isOpen={false}>
                                <p className="cardtext"> ingredients and the utensils in the video. We also provide the links that direct you to buy the items and utensils in online platforms.</p>
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
                    <p className="customtext">When you play the video made by a home maker, we fetch the data from the live video and we can tell you the cost of the whole process of cooking starting from the ingredients of the dish till the utensils used in the video.<br />We detect the no of head count in the video along with the ingredients and the utensils in the video. We also provide the links that direct you to buy the items and utensils in online platforms.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        );
}

export default HomeMakerPage;
