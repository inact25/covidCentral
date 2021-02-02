import React, {Component} from 'react';
import symptompsImg from "../assets/img/symptoms.png"
import {AiOutlineInfoCircle,AiFillCheckCircle} from "react-icons/all"

class Symptom extends Component {
    render() {
        return (
            <section className="symptom">
                <div className="container py-5 my-5">
                    <div className="row h-100">
                        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 order-lg-1">
                            <div className="hero-badge">
                                <button type="button" className="btn btn-sm btn-outline-danger rounded-pill mb-2">
                                    <span style={{fontSize:"1.15rem"}}><AiOutlineInfoCircle/></span> Covid-19 Alert
                                </button>
                            </div>
                            <h2>
                                What is novel coronavirus?
                            </h2>
                            <p>COVID-19 Symptoms are from mild to severe. It takes 2-14 days after exposure for symptoms to develop. Symptoms may include:</p>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Hard Cought
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Resoiratory Distress
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Fever
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Shortness of Breath
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Headache
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-2">
                                    <span className="text-success"><AiFillCheckCircle/></span> Kidney Failure
                                </div>
                            </div>
                            <div className="hero-action mb-2">
                                <button className="btn-danger btn-lg btn rounded-pill">Check Symptom</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 txt-right order-1 order-md-2 order-lg-2">
                            <img src={symptompsImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Symptom;