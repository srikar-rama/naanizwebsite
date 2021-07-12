import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText,CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';
import MainImg from '../../images/MT.png';




const MenuTranslator = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Menu Translator</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( Explore in your Native language )</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/bot.png" className="mr-4 img-fluid"></img> Menu Translator</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}>Most us do not know the English language and thus it becomes difficult for us to read and understand the recipe names in English. But naaniz provides an app that changes the English names of the dishes to regional languages like Hindi, Telugu, Bengali. </CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext"></p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src={MainImg} className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Everyone can read</CardTitle>
                            <CardText className="cardtext">Read menu in any language.</CardText>
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
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Available languages</CardTitle>
                            <CardText className="cardtext">Hindi, Telugu, Bengali etc..</CardText>
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
                    <p className="customtext">Even though English is the most widely spoken language in India, most of the people cannot read and write English.<br /> Thus, it becomes difficult for them if they find the names of the dishes in English if they wanted to order food.<br /> Most us do not know the English language and thus it becomes difficult for us to read and understand the recipe names in English. <br />But naaniz provides an app that changes the English names of the dishes to regional languages like Hindi, Telugu, Bengali. <br />With the help of this you can read the names of the dishes in your own regional languages, which makes it user friendly option for all the users from various parts of the world.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        );
}

export default MenuTranslator;
