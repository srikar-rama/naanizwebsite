import React, { Component } from 'react';
import './mainpage.css';
import logo4095175 from '../projectpics/4095175.png';
import Rectriangle from '../projectpics/Rectangle.png';
import Menu from '../projectpics/menu.png';
import Bot from '../projectpics/bot.png';
import Home from '../projectpics/homes.png';
import Delivery from '../projectpics/delivery.png';
import Billboard from '../projectpics/billboard.png';
import Fork from '../projectpics/fork.png';
import { Link, animateScroll as scroll } from "react-scroll";

export default class features extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="sf">
                    <h1>Naaniz Special Features</h1>
                    <p>Material icons are delightful, beautiful crafted symbols for common actions and items. Download on desktop to use them in your digital product for Android, iOS adn web...</p>
                </div>
                <div className="container-fluid colorwhole">
                    <div className="aiheading">
                     <h1>Artificial Intelligence</h1>
                     <h4>(Data has a better idea)</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 settings">
                            <div>
                                <h4>AI SEARCH FOOD SEVICE</h4>
                            </div>
                            <div>
                                <div>
                                <p><i className="fa fa-gear"></i>Click or upload a pic of a dish you want to eat!</p>
                                </div>
                                <div>
                                <p> <i className="fa fa-gear"></i>Our AI is <span className="ifc">indian food centric</span> it can easily detect indian food.  </p>
                                </div>
                                <div>
                                <p> <i className="fa fa-gear"></i>As millions of food pictures are available on our AI you can click photo from any angle you want.</p>
                                </div>
                            </div>
                            <div>
                            <img alt="t" src={Fork} className="forkimg" style={{margin: "5% 0px 0px 10%"}}></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img alt="t" src={Rectriangle} className="imgrec"></img>
                        </div>
                    </div>
                </div>
                <div className="feautureheading">
                    <h1>Our Features</h1>
                    <h5>Here are our features for you</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="menubox">
                            <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px" , margin: "20px"}}></img>Menu Recommendation</h5>
                            <p>When you want to open a restaurant in a particular place and not know the popular dishes of particular state...</p>
                            <div><a href="/menu-rec">More<i className="fa fa-arrow-down"></i></a></div>
                        </div>
                        <div className="alloptions">
                            <div>
                            <p><img alt="t" src={Bot} style={{height: "20px", width: "20px"}}></img>Our Special ChatBot</p>
                            </div>
                            <div>
                            <p><img alt="t" src={Home} style={{height: "20px", width: "20px"}}></img>Homemaker Live Cooking</p>
                            </div>
                            <div>
                            <p><img alt="t" src={Delivery} style={{height: "20px", width: "20px"}}></img>NUTRITION TELLER</p>
                            </div>
                            <div>
                            <p><img alt="t" src={Billboard} style={{height: "20px", width: "20px"}}></img>Vendor Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img alt="t" src={logo4095175} className="logoimgg" style={{height: "100%" ,width: "70%"}}></img>
                    </div>
                </div>
            </div>
        )
    }
}
