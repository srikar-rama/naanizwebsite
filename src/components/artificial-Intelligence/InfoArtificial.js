import React from 'react';
import { Card, Button, CardTitle, CardText,CardBody, Collapse } from 'reactstrap';
import '../MenuRecPage/menu-rec.css';
const InfoArtificial= (props) => {
    
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

        
        return (
            <div>
                 <div className="container">
                 <div className="row row-content mt-5 pt-5">
                    <div className="col-12 col-md-4">
                        <Card className="card2">
                        <CardBody className="cardbody1">
                            <CardTitle className="aicardtitle"><img alt="t" src="/assets/images/menuimage3.png" className="mr-2 img-fluid"></img>AI SEARCH FOOD Service</CardTitle>
                            <CardText className="cardtext">We will get you the food from Picture</CardText>
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
                            <CardTitle className="aicardtitle"><img alt="t" src="/assets/images/menuimage3.png" className="mr-2 img-fluid" id="imgspace"></img>Give us Picture</CardTitle>
                            <CardText className="cardtext">Give us food picture we will tell from where it is.</CardText>
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
                    <p className="customtext">Most of the people do not recognize the food that is made from any other state or any other country.<br /> You might be in a situation where you are not able to recognize the food due to the reason that it has its origin from any other state or any other country . <br />This brings the gap between the food and its value away from you.<br/> So, our app helps the user to recognize the food from the picture the user clicked. <br/>We collect the picture from you and with the help of our technology we identify what dish has clicked. Thus, you will be able to identify and recognize the dishes with the pictures that you see.</p>
                </div>
                 <div className="row mt-5 mb-5 justify-content-center">
                    <Button className="button2" size="lg"><div className="button-text">Request Demo</div></Button>
                </div>
                </div>
            </div>
        )
    }


export default InfoArtificial
