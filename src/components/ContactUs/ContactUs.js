import React, { Component } from 'react';
import {Form, FormGroup, Input, Button, Col} from 'reactstrap';
import './ContactUs.css';

export default class ContactUs extends Component {

    
    
    render() {
        return (
            <div>
            <div className="row rowadjust">
                    <div className="col-12 col-md-6 displaycustom">
                        <div className="row">
                            <div className="col-md-3"><img alt="t" src="/assets/images/contact1.png" className="img-fluid img-custom3"></img></div>
                            <div className="col-md-4"></div>
                            <div className="col-md-5"><img alt="t" src="/assets/images/contact2.png" className="img-fluid"></img></div>
                        </div>
                        <div className="row custommargin">
                            <div className="col-md-6"><img alt="t" src="/assets/images/contact3.png" className="img-custom1"></img></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-3"><img alt="t" src="/assets/images/contact4.png" className="img-fluid img-custom2"></img></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12"><h2 className="contacthead">Contact us</h2></div>
                            <div className="col-12"><h2 className="contacthead1">Please feel free to talk to us if you have any questions,</h2></div>
                            <div className="col-12"><h2 className="contacthead2">We endeavour to answer within 24 hours</h2></div>
                            <div className="col-12 customcol">
                                <Form>
                                    <FormGroup row>
                                        <Col sm={10} md={8}>
                                        <Input type="name" name="name" id="examplename" placeholder="Name:"  className="form-control-custom"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={10} md={8}>
                                        <Input type="email" name="email" id="examplemail" placeholder="Email:" className="form-control-custom" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col sm={10} md={8}>
                                        <Input type="textarea" name="text" id="exampleText" placeholder="FeedBack/Query:" className="form-control-custom"/>
                                        </Col>
                                    </FormGroup>
                                    <Button className="contactbutton" size="lg"><h4 className="btn-text-contact">Submit</h4></Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}