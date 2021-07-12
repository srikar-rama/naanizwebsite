import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import '../ChatBotPage/ChatBotPage.css'
import MainImg from '../../images/PP.png';
import MenuImg from '../../images/Menu.png';
import BotImg from '../../images/Bot.png';
import YTImg from '../../images/YT.png';
import './PricePredictor.css';

export default class PricePredictor extends Component {
    
    render() {
        return (
            
            <div className="container mainbox">
                <div className='heading'>
                    <h1>
                    Price Predictor 
                    </h1>
                    <h4>
                        ( Cook by using the Details )
                    </h4>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <Card className='card'>
                            <Card.Body>
                                <img src={BotImg} alt = 'ChatBot'/>
                                <div className='cardHeader'>
                                    PRICE PREDICTOR
                                </div>
                                <p className='cardBody'>
                                    We provide the user with a cost to start a restaurant that is the cost for the main dish and the cost for the side dishes along with the cost of each and every product in the dish.                                </p>
                                <div id='more'>
                                    More
                                    <i className='fa fa-angle-down'></i>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='col-12 col-md-6'>
                        <img src = {MainImg} alt = 'ChatBot' className='ppimg'/>
                    </div>
                </div>
                <div className='row menucards'>
                    <div className='col-md-4 cards123 the3cards'>
                        <Card id='subcard'>
                            <Card.Header className='CH'></Card.Header>
                            <Card.Body className='CB'>
                            <img src={MenuImg} alt = 'Menu' className='MenuImg'/>
                                <div className='card2Header'>
                                    Cost of Dish
                                </div>
                                <p className='card2Body'>Cost to the main dish</p>
                                <div id='more'>
                                    More
                                    <i className='fa fa-angle-down'></i>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 the3cards'>
                        <Card id='subcard' className='subcard2'>
                        <Card.Header className='CH'></Card.Header>
                            <Card.Body className='CB'>
                            <img src={YTImg} alt = 'Youtube'/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4 the3cards'>
                        <Card id='subcard'>
                        <Card.Header className='CH'></Card.Header>
                            <Card.Body className='CB'>
                            <img src={MenuImg} alt = 'Menu' className='MenuImg'/>
                                <div className='card2Header'>
                                    Every Product Details
                                </div>
                                <p className='card2Body'>Cost of each and every product in the dish</p>
                                <div id='more2'>
                                    More
                                    <i className='fa fa-angle-down'></i>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <p className='content'>
                        Before stating a restaurant, certain factors have to be taken into account. Those are the following: 
                        <ol className='orderedlist'>
                        <li> Location of the restaurant. </li>
                        <li>Cost of the rent expenses in the location. </li>
                        <li>Cost to start a restaurant. </li>
                        <li>Cost of the equipment’s. </li>
                        <li>Cost of the food ingredients.</li>
                        </ol> 
                        Thus, these factors play a main role in the success of a perfect restaurant. Thus, we provide the user with a cost to start a restaurant that is the cost for the main dish and the cost for the side dishes along with the cost of each and every product in the dish.                    
                    </p>
                </div> 
                <div className='row'>
                    <div className='col-md-4 the3cards final-button'>
                        <Button className='btn-block longbutton'><div className='button'>Request Demo</div></Button>
                    </div>
                </div>
            </div>
        
        );
    }
}