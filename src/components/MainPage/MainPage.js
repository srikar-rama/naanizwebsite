import React, { Component } from 'react';
import Requestdemo from './requestdemo';
import Whynaaniz from './whynaaniz';
import Features from './features';
import Featurescard from './featurecard';
import Miscellaneous from './miscellaneous';
import CustomerReview from './customerReview';
import Detailsabout from './detailsabout';
import Footer from './mainfooter';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                
                <Requestdemo />
                <Whynaaniz />
                <Features title="Section 1" id="section1" dark={true} />
                <Featurescard />
                <Miscellaneous />
                <Detailsabout />
                <CustomerReview />
                <Footer />
            </div>
        )
    }
}
