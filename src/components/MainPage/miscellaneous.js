import React, { Component } from 'react';
import './mainpage.css';
import addToCart from '../projectpics/addToCart.png'
import remove1 from '../projectpics/remove1.png'
import trjttj from '../projectpics/trjttj.png'
import ff from '../projectpics/ff.png'

export default class miscellaneous extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row addfoodrow">
                <div className="col-md-12">
                    <h1>Add food from Homemaker</h1>
                    <p>We at Naaniz help in providing the home cooks and they will be instantly connected to a network in your state/locality/area.</p>
                </div>
                <div>
                    <img alt="t" src={addToCart} style={{width: "50%"}}></img>
                </div>
            </div>
            <div className="row chatbotrow">
                <div>
                    <a href="/chatbot" style={{textDecoration: "none" , color: "rgb(255,77,0)"}}><h1>Multi Language ChatBot</h1></a>
                    <p>Nowdays, there are no chatbot in major companines, but with Naaniz, you can use our chatbot for communication purposes and can also order using the chatbot and can even give your query in the excel sheet provided by us</p>
                </div>
                <div className="col-md-12 chatbigbox" >
                    <img alt="t" className="img1"src={remove1}></img>
                    <img alt="t" className="img2" src={trjttj} style={{width: "60%"}}></img>
            </div>
            
            </div>
            <div className="row chatbotrow">
                <div>
                    <h1>MENU TRANSLATOR</h1>
                    <p>Most of us do not know the english language and thus it becomes difficult for us to read and understand the recipe names 
                    in English. But Naaniz provides an app that changes the English names of the dishes to regional language like Hindi, Telegu, Bengali.</p>
                </div>
                <div>
                    <img alt="t" className="ffimg" src={ff}></img>
                </div>
            </div>
            </div>
        )
    }
}
