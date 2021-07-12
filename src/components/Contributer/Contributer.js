import React, { useState, Fragment, Component } from 'react';
import ReactDOM from "react-dom";
import ItemsCarousel from 'react-items-carousel';
import './Contributer.css';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col,Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import AngryJoe from './components/AngryJoe';
import * as Cards from './components/cards';

const ModalForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="ContributorButton" onClick={toggle}>Apply Now</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="customModalheader" toggle={toggle}>Apply Form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleName" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" id="exampleName" placeholder="Enter your name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplecontactnumber" sm={2}>Phone</Label>
              <Col sm={10}>
                <Input type="number" name="number" id="examplecontactnumber" placeholder="Enter your Phone number" />
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <legend className="col-form-label col-sm-2">Role</legend>
              <Col sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                   UI/UX
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />{' '}
                    Sever Backend(NodeJS & Flux)
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Sever Frontend(ReactJS)
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Andoid Development
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    App Development(Flutter)
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Machine Learning
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Content Writer
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Research Analyst
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2"/>{' '}
                    Recpie Contributor
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button className="ContributorButton2" onClick={toggle}>Submit</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

class Example extends Component {
  state = {
    selectedCardType: ''
  };


  renderCardSelector() {
    return (
        <div className="d-flex justify-content-center">
        <select className="card-selector form-control formcontrolforcontributor"
          onChange={(e) =>{
            var str = e.target.value;
            str = str.replace(/[{()}]/g, '');
            str = str.replace('&','');
            str = str.replace('/','');
            str = str.replace(/ +/g, "");
            console.log(str);
            return this.setState({ selectedCardType: str });
            }}>
          <option></option>
          <option>UI/UX</option>
          <option>Sever Backend(NodeJS & Flux)</option>
          <option>Sever Frontend(ReactJS)</option>
          <option>Andoid Development</option>
          <option>App Development(Flutter)</option>
          <option>Machine Learning</option>
          <option>Content Writer</option>
          <option>Research Analyst</option>
          <option>Recpie Contributor</option>
        </select>
        </div>
    );
  }

  render(){
    return (
      <Fragment>
        <div className="row justify-content-center "><h2 className="Headtext">Contributor's Page</h2></div>
        <div className="row justify-content-center mb-5 mt-3"><h2 className="Headtext2">( Welcome To the contributors page, meet our Contributors )</h2></div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedCardType)}
          </div>
        </section>
      </Fragment>
    );
  }


  


  renderSelectedCard(selectedCardType) {
    if (!selectedCardType)
      return <AngryJoe text="Please select A contributor catagory!" />;

    const Card = Cards[selectedCardType];

    return <Card />;
  }
}


const Contributer = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{"marginTop":"150px"}}>
    <div className="container">
        <div><Example /></div>
        <div className="row justify-content-center">
        <ModalForm className="customformmodal" />
        </div>    
    </div>
    </div>
  );
};

export default Contributer;