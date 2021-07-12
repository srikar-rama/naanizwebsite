import React, { Component } from 'react'
import {Accordion, Card} from 'react-bootstrap';
import './Faqs.css';



export default class Faqs extends Component {
    

    render() {
        return (
            <div className="container mainbox">
                <div className='heading'>
                    <h1>FAQs</h1>
                    <h4>(We are here to help you)</h4>
                </div>
                
                <div>
                <Accordion id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" id='heading'>
                            <div>
                                What Shipping methods are available?
                                <i className="fa fa-caret-down arrowdown"></i>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion  id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" id='heading'>
                            <div>
                                How Long it will take to get my Package?
                                <i className="fa fa-caret-down arrowdown"></i>                         
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" id='heading'>
                            <div>
                                How do I Track my Order?
                                <i className="fa fa-caret-down arrowdown"></i>                            
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" id='heading'>
                            <div>
                                How do I Place an Order
                                <i className="fa fa-caret-down arrowdown"></i>                            
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" id='heading'>
                            <div>
                                Who should I contact if I have any queries?
                                <i className="fa fa-caret-down arrowdown"></i>                            
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Accordion id='accord'>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5" id='heading'>
                            <div>
                                Do I need an account to place an order?
                                <i className="fa fa-caret-down arrowdown"></i>                            
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <div id='details'>
                            <Card.Body id='content'>
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.
                            </Card.Body>
                            <div id='line'></div>
                        </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </div>
                
            </div>
        )
    }
}
