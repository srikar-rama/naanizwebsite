import React, {useState } from 'react';
import { Card, Button, CardTitle, CardText,CardBody, Collapse } from 'reactstrap';
import './menu-rec.css';

const MenuRecPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Menu Recommendation</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( Get a better choice Menu )</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/menuimage2.png" className="mr-4 img-fluid"></img>Menu Recommendation</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}>When a you want to open a restaurant in a particular place and not know the popular dishes of those particular state/</CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext"> city/locality, our program fetches the data that will tell us all the popular food categories along with the link for the dishes.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src="/assets/images/menuimage.png" className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Menu Category</CardTitle>
                            <CardText className="cardtext">Get here thali recommendation and single dishes categories</CardText>
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
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Get Reviews for Dishes</CardTitle>
                            <CardText className="cardtext">We provide you the ratings of same dishes in various rest...</CardText>
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
                </div>
                </div>
                <div className="container" style={{"marginTop":"100px"}}>
                <div className="row row-content mb-5">
                    <p className="customtext">Starting or opening up a restaurant at an unknown place is very difficult to make it a successful running restaurant.<br />These are due to the competition in the market.<br />The factors include the following:</p>
                    <div className="mt-4 mb-4 customtext2">
                        <ol>
                        <li ><div className="ml-4">Location</div></li>
                        <li><div className="ml-4">Population</div></li>
                        <li><div className="ml-4">Commercial area</div></li>
                        </ol> 
                    </div>
                    <p className="customtext">Thus, when you want to open a restaurant in a particular place and not know the popular dishes of those particular state/ city/locality, our program fetches the data that will tell us all the popular food categories along with the link for the dishes. We also provide the ratings and the prices of the same dishes in various restaurants that makes the user to fix their own pricing and the categories of the food. We also provide you with the comprising of Combo’s and thali recommendation, and the single dishes categories.</p>
                </div>
                <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>

        );
}

export default MenuRecPage;
