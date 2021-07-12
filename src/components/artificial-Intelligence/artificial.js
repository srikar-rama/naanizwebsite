import React, { Component } from 'react'
import '../MainPage/mainpage.css';
import './artificial.css'
import Rectriangle from '../projectpics/Rectangle.png';
import Fork from '../projectpics/fork.png';
import InfoArtificial from './InfoArtificial';
import '../MenuRecPage/menu-rec.css';
export class artificial extends Component {
    render() {
        return (
            <div>
             <div className="container-fluid colorwhole" id="headingtop">
                    <div class="heading1">
                     <h1 class="headercustom">Artificial Intelligence</h1>
                     <h4 class="headercustom2">(Data has a better idea)</h4>
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
                            <img alt="t" src={Fork} style={{margin: "5% 0px 0px 10%"}}></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img alt="t" src={Rectriangle} style={{height: "60%",width: "70%"}}></img>
                        </div>
                    </div>
                </div>
                
                <InfoArtificial/>
            </div>
        )
    }
}

export default artificial

