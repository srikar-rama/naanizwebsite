import React, { Component } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {

    render() {
        return (
            <div>
          <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-color">
    <div class="container">
        <a class="navbar-brand mx-auto" href="/">
			Naaniz
        </a>
        <button id="toggler"class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span id="toggler"class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02">         
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item main-nav">
                    <a class="nav-link text-nowrap ml-5" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-nowrap ml-5" href="/"><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Explore</Link></a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link text-nowrap ml-5" href="/">#featured</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-nowrap ml-5" href="/contact-us">Contact us</a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-default text-nowrap ml-5" id="button1" >Request Demo</button>
                </li>
           </ul>
        </div>
    </div>
</nav>
            </div>
        )
    }
}

export default Navbar;
