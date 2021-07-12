import React, { useState } from 'react';
import { Card, Button, CardTitle, CardText,CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';
import ChatBotImage from '../../images/ChatBot.png';

const AllergyPage = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="headercustom" style={{"paddingTop":"70px"}}>Our Special ChatBot</h2>
                        </div>
                        <div className="col-12">
                            <h4 className="headercustom2">( Chat with Multi-language AI )</h4>
                        </div>
                    </div>
                <div className="row row-content rowcustom">
                    <div className="col-12 col-md-5">
                        <Card className="card1">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle"><img alt="t" src="/assets/images/bot.png" className="mr-4 img-fluid"></img>Chatbot ( Multi-language )</CardTitle>
                            <CardText className="cardtext" style={{"marginBottom":"0px"}}> Nowadays, there are NO chatbot in major companies, but with naaniz, you can use our chatbot for communication </CardText>
                            <Collapse isOpen={isOpen}>
                                <p className="cardtext">purposes and can also order using the chat bot and can even give your own query in the excel sheet provided by us.</p>
                            </Collapse>
                            <div className="row d-flex justify-content-end">
                            <Button color="secondary" size="sm" onClick={toggle} className="btn1">More <i className="fa fa-angle-down"></i></Button>
                            </div>
                        </CardBody>
                        <div className="customborder"></div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-6"><img alt="t" src={ChatBotImage} className="img-fluid imagebrand"></img></div>
                </div>
                <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Communicate</CardTitle>
                            <CardText className="cardtext">Get communication with each other using our Chatbot.</CardText>
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
                            <CardTitle className="cardtitle1"><img alt="t" src="/assets/images/menuimage3.png" className="mr-4 img-fluid"></img>Order Using Chatbot</CardTitle>
                            <CardText className="cardtext">Order using our special Chatbot.</CardText>
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
                    <p className="customtext">Chatbot plays one of the vital roles in the interaction between any company and its users. You can ask any query or give any suggestions and feedback with the help of the chatbot. By this way, we can interact with individuals and make our communication into an effective result. Nowadays, there are NO chatbot in major companies. But with naaniz, you can use our chatbot for communication purposes. In naaniz we can also order using the chat bot. You can even give your own query in the excel sheet provided by us.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        );
}

export default AllergyPage;
