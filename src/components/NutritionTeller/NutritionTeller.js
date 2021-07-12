import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';


const NutritionTeller = () => {

        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);


        return (
            
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Nutrition Teller</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( Get every Details related to food )</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/bot.png" className="mr-4 img-fluid"></img>Nutrition Teller</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}>During this COVID 19 situation, the government has made a special rule for the restaurants that only 50% of the </CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext">people are supposed to eat along with social distancing. With the help of the existing cameras in the restaurant our app provides the restaurant owner or the restaurant manager that the number of people are more and that the social distancing has been violated if there are more than the more than 50% of the customers entering into the restaurant.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src="/assets/images/nutrition.png" className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Get Nutrients Details</CardTitle>
                            <CardText className="cardtext">Get to know everything about the Recipe</CardText>
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
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Cameras in Restaurant</CardTitle>
                            <CardText className="cardtext">With the help of the existing cameras in the restaurant our</CardText>
                            <Collapse isOpen={false}>
                                <p className="cardtext"> app provides the restaurant owner or the restaurant manager that the number of people are more and that the social distancing has been violated if there are more than the more than 50% of the customers entering into the restaurant.</p>
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
                    <p className="customtext">During this COVID 19 situation, the government has made a special rule for the restaurants that only 50% of the people are supposed to eat along with social distancing.<br /> And this option is taken by the government to avoid the spread of the life dangerous Covid 19 virus disease.<br /> This disease spreads from person to person and since there is no vaccine found for the same, the prevention of the spread of the virus is in the need of the hour. Thus, we have come with the idea that helps the restaurant mangers and owners with the safety measures.<br /> We do this with the help of the existing cameras in the restaurant and our app provides the restaurant owner or the restaurant manager that the number of people is more.<br /> We also intimate them that the social distancing has been violated if there are more than the more than 50% of the customers entering into the restaurant.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        
        );
}

export default NutritionTeller;