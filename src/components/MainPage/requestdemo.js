import React, { Component } from 'react';
import './mainpage.css';
import logo from '../projectpics/asset-1.png';


export default class requestdemo extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid fulldemo">
                    <div className="row reqdemo">
                        <div className="col-md-5">
                            <h1>Explore Food From Homemaker</h1>
                            <p>We at Naaniz help you in providing the home cooks and they will be instantly connected to a network in your state/locality/area.</p>
                            <a href="/" type="button">Request Demo</a>
                        </div>
                        <div className="col-md-7">
                            <img src={logo} alt="t">

                            </img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
