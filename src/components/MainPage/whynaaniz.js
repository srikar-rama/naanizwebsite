import React, { Component } from 'react';
import './mainpage.css';
import Video from '../projectpics/video.png'

export default class whynaaniz extends Component {
    render() {
        return (
            <div className="container-fluid whynaaniz">
                <div className="headingwhy">
                    <h1>Why Naaniz?</h1>
                    <p>We at Naaniz help you in providing the home cooks and they will be instantly connected to a network in your state/locality/area.We connect with the home cooks with the help of our food app.</p>   
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <img src={Video} alt="t" style={{marginLeft: "10%"}} className="videoimg"></img>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="container-fluid reasons">
                            <div className="row">
                                <div className="col-md-5">
                                    <p>Today,working couples are buying food from restaurants every day. They have money but don't have time to 
                                    cook food for themselves and kids.</p>
                                    <div className="container-fluid">#First</div>
                                </div>
                                <div className="col-md-5 col-md-offset-2">
                                    <p>We at Naaniz help you in providing the home cooks and they will be instantly connected to a network 
                                    in your state/locality/area.</p>
                                    <div className="container-fluid">#Second</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <p>The customers are provided with the Suggestions like menu recommendation , vendors etc.</p>
                                    <div className="container-fluid">#third</div>
                                </div>
                                <div className="col-md-5 col-md-offset-2">
                                    <p>By this , you can easily order homemade tasty food anytime for kids with your own costomized menu</p>
                                <div className="container-fluid">#Fourth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h5>
                        Today , working couples are buying food from restaurants every day.
                    </h5>
                    <h5>
                        You may have money but don't have the time to cook food for yourself and for your kids due to scarcity  of time.
                    </h5>
                    <h5>
                        You might need someone to cook them homemade food which is healthy.
                    </h5>
                    <h5>
                    We at Naaniz help you in providing the home cooks and they will be instantly connected to a network in your state/locality/area.We connect with the home cooks with the help of our food app.
                    </h5>
                    <h5 className="sugg">
                    You will be provided with the Suggestions like the followings:
                    </h5>
                    <table>
                    <ol>
                        <tr>
                            <li>Machine language on the weather recommendation food system for the customers.</li>
                        </tr>
                        <tr>
                            <li>Menu recommendation</li>
                        </tr>
                        <tr>
                            <li>Holiday food recommendation system.</li>
                        </tr>
                        <tr>
                            <li>Pre-order appointment system.</li>
                        </tr>
                        <tr>
                            <li>Credit system</li>
                        </tr>
                        <tr>
                            <li>Scheduled delivery</li>
                        </tr>
                        <tr>
                            <li>Customized delivery.</li>
                        </tr>
                        </ol>   
                    </table> 
                    <p className="finalline">By this, you can easily order homemade tasty food anytime for your kids with your own Customized menu.</p>
                </div>
                <div className="row totaldown">
                    <div className="col-md-3">
                        <h4>Total downloads</h4>
                        <p>100k +</p>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <h4>Total downloads</h4>
                        <p>100k +</p>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <h4>Total downloads</h4>
                        <p>100k +</p>
                    </div>
                </div>
            </div>
        )
    }
}
