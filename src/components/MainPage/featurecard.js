import React, { Component } from 'react';
import './mainpage.css';
import Menu from '../projectpics/menu.png';

export default class featurecard extends Component {
    render() {
        return (
            <div className="container-fluid bigpart">
            <div className="row">
                <div className="col-md-3">
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px"}}></img>NUTRITION TELLER</h5>
                        <p>During this COVID-19 situation, goverment has made a...</p>
                    </div>
                    <div className="lowerpart">
                        <a href="/nutrition-teller">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1">
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px"}}></img>POSTER MAKER</h5>
                        <p>Most of us are unable to make their product appealing that...</p>
                    </div>
                    <div className="lowerpart">
                    <a href="/postermake">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1" >
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px"}}></img>ALLERGY DETECTOR</h5>
                        <p>Most of us are allergic to certain food that might lead to...</p>
                    </div>
                    <div className="lowerpart">
                    <a href="/allergy">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>
            </div>    


            <div className="row">
                <div className="col-md-3">
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px"}}></img>MENU TRANSULATOR</h5>
                        <p>Most of us do not know the english language and thus it...</p>
                    </div>
                    <div className="lowerpart">
                    <a href="/menu-translator">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1">
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu} style={{height: "20px" , width: "20px"}}></img>WHOM TO SELL</h5>
                        <p>Get to know whom to sell easily...</p>
                    </div>
                    <div className="lowerpart">
                    <a href="/whom-to-sell">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1">
                    <div className="upperpart">
                        <p>.</p>
                    </div>
                    <div className="middlepart">
                        <h5><img alt="t" src={Menu}></img>NOTIFICATIONS</h5>
                        <p>Get notified for every detail...</p>
                    </div>
                    <div className="lowerpart">
                    <a href="/notifications">More<i class="fa fa-arrow-down" aria-hidden="true"></i></a>
                        
                    </div>
                </div>
            </div>            
            </div>
        )
    }
}
