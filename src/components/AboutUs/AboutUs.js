import React, { Component } from 'react'
import './AboutUs.css'


export default class AboutUs extends Component {
    render() {
        return (
                 <div className="container" style={{paddingTop:"75px"}}>
                 <h1 className="textalign">About Us</h1>
                 <h3 className="textalign">(Get to know us)</h3>
                 <div id="gap">
                 <p>Naaniskitchen.com is aimed at bringing the household individuals close to the customers in need. On our online platform one can find products ranging from homemade pickles (achar), papad, bakery goods, paintings, fabrics, crafts, decors and lots more. With us, you can get ravishing edibles to rare antiques at your door step. Do not need to worry about quality, delivery time and price of the product.</p>
                 <h1 id="colour" >What we Do?</h1>
                 <p>Today, working couples are buying food from restaurants every day. They have money but don’t have time to cook food for themselves and kids. They need someone to cook them homemade food which is healthy. We at Naaniz help you in providing the home cooks and they will be instantly connected to a network in your state/locality/area. We connect with the home cooks with the help our Naaniz app. The customers are provided with the Suggestions like menu recommendation, vendors etc. By this, you can easily order homemade tasty food anytime for your kids with your own customized menu.</p>
                 </div>
               
            </div>
        )
    }
}
