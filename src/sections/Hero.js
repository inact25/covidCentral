import React, {Component} from 'react';
import banner from '../assets/img/heroImg.png'
import {AiOutlineInfoCircle} from 'react-icons/all'

class Hero extends Component {
    render() {
        return (
            <section className="jumbotron">
                <div className="container hero-container">
                    <div className="row h-100">
                        <div className="col-12 col-md-6 col-lg-6 my-auto order-2 order-md-1 order-lg-1">
                            <p className="hero-badge">
                               <AiOutlineInfoCircle/>   Covid-19 Alert
                            </p>
                            <div className="hero-title mb-2">
                                <h1>Save yourself Save the world</h1>
                            </div>
                            <div className="hero-caption mb-5">
                                <h5>Corona virus disease (Covid 19) is an infectious disease caused by a new virus</h5>
                            </div>
                            <div className="hero-action mb-2">
                                <button className="btn-danger btn btn-lg rounded-pill">Check Symptom</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 order-1 order-md-2 order-lg-2">
                            <img className="img-fluid mb-5" src={banner} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;