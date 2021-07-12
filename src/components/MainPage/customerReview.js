import React, { Component } from 'react';
import './mainpage.css';
import Photo from '../projectpics/photo.png';

export default class customerReview extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="chatbotrow">
                    <h1>Customer Review</h1>
                    <p>We have received lot number of reviews from our Customers</p>
                </div>
                

                <div id="carouselExampleControl" class="carousel slide" data-ride="carousel" data-interval="0">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="container-fluid">
        <div className="row reviews">
        <div className="col-sm-2">
            <img alt="t" src={Photo}></img>
        </div>
        <div className="col-sm-8 col-sm-offset-1">
                <h1>Vikas Verma</h1>
                <h5><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>(4.0)</h5>
                <p>Now I started Earning money from my own recipes! My family always said I should been a chef , and this is even better!</p>
        </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div className="container-fluid">
        <div className="row reviews">
        <div className="col-sm-2">
            <img alt="t" src={Photo}></img>
        </div>
        <div className="col-sm-8 col-sm-offset-1">
                <h1>Vikas Verma</h1>
                <h5><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>(4.0)</h5>
                <p>Now I started Earning money from my own recipes! My family always said I should been a chef , and this is even better!</p>
        </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div className="container-fluid">
        <div className="row reviews">
        <div className="col-sm-2">
            <img alt="t" src={Photo}></img>
        </div>
        <div className="col-sm-8 col-sm-offset-1">
                <h1>Vikas Verma</h1>
                <h5><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>(4.0)</h5>
                <p>Now I started Earning money from my own recipes! My family always said I should been a chef , and this is even better!</p>
        </div>
        </div>
      </div>
    </div>
    


  </div>
  <a class="carousel-control-prev reviewprev" href="#carouselExampleControl" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next reviewprev" href="#carouselExampleControl" role="button" data-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

                

                <div className="reviewlast">
                    <h1>Ready to grow your business,</h1>
                    <h1>Lets request a demo</h1>
                    <a type="button" href="/">Request Demo</a>
                </div>
            </div>
            
        )
    }
}
