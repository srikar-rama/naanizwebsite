import React, { Component } from 'react';
import './mainpage.css';
import Insta from '../projectpics/insta.png';
import Whatsapp from '../projectpics/whatsapp.png';
import Facebook from '../projectpics/facebook.png';
import Twitter from '../projectpics/twitter.png';
import Linkedin from '../projectpics/linkedin.png';

export default class mainfooter extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row footersec" style={{backgroundColor: "rgb(255,77,0)"}}>
                    <div className="col-md-2 col-sm-6">
                        <p><a href="/contact-us">CONTACT US</a></p>
                        <p><a href="/">+91 7489260831</a></p>
                        <p><a href="https://naaniz.com/">www.naaniz.com</a></p>
                        <p><a href="/">Find a store</a></p>
                    </div>
                    <div className="col-md-2 col-sm-6 col-md-offset-1">
                        <p><a href="/contact-us">CUSTOMER SERVICE</a></p>
                        <p><a href="/">Ordering and Payment</a></p>
                        <p><a href="/">Returns</a></p>
                        <p><a href="/faqs">FAQ</a></p>
                    </div>
                    <div className="col-md-2 col-sm-6 col-md-offset-1">
                        <p><a href="/">INFORMATION</a></p>
                        <p><a href="/about-us">About us</a></p>
                        <p><a href="/contact-us">Work with Us</a></p>
                        <p><a href="/">Privacy Policy</a></p>
                        <p><a href="/">Terms & Conditions</a></p>
                        <p><a href="/contact-us">Enquires</a></p>
                    </div>
                    <div className="col-md-2 col-sm-6 col-md-offset-1 searchmain">
                    <p><a href="/">Subscribe to Naaniz via Email</a></p>
                        <p><a href="/">Subscribe us to get Notify our new Upcoming feature</a></p>
                        <form action="">
                        <input type="text" placeholder="Email Address" name="search"  style={{width: "70%" , paddingLeft: "10px"}}/>
                        <button type="submit">Search</button>
                        </form>

                    </div>
                    <div className="col-md-2 col-sm-6 col-md-offset-1">
                        <a href="https://instagram.com/_naaniz_?igshid=1pxladbun1rz7"><img alt="t" src={Insta} style={{backgroundColor: "rgb(255,77,0)" , textAlign: "end"}}></img></a>
                        <a href="/"><img alt="t" src={Whatsapp}></img></a>
                        <a href="https://m.facebook.com/naaniskitchen/"><img alt="t" src={Facebook}></img></a>
                        <a href="/"><img alt="t" src={Twitter}></img></a>
                        <a href="https://www.linkedin.com/company/naaniz/"><img alt="t" src={Linkedin}></img></a>
                    </div>
                </div>
            </div>
        )
    }
}
