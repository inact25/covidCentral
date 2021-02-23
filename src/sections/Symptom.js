import React, {Component} from 'react';
import symptompsImg from "../assets/img/Symptoms.png"
import {AiFillCheckCircle, AiOutlineInfoCircle} from "react-icons/all"

class Symptom extends Component {
    render() {
        return (
            <section className="symptom">
                <div className="container py-5 my-5">
                    <div className="row h-100">
                        <div className="col-12 col-md-12 col-lg-6 order-2 order-md-2 order-lg-1">
                            <p className="hero-badge">
                                <AiOutlineInfoCircle/> Covid-19 Symptoms
                            </p>
                            <div className="symptom-title">
                                <h2>
                                    What are the symptoms?
                                </h2>
                            </div>
                            <div className="symptom-description">
                                <p>COVID-19 Symptoms are from mild to severe. It takes 2-14 days after exposure for
                                    symptoms to develop. Symptoms may include:</p>
                            </div>
                            <div className="symptom-list">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Hard Cought
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Resoiratory Distress
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Fever
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Shortness of Breath
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Headache
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Kidney Failure
                                    </div>
                                </div>
                            </div>
                            <div className="hero-action mt-5 mb-2">
                                <button className="btn-danger btn-lg btn rounded-pill">Check Symptom</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 txt-center order-1 order-md-1 order-lg-2">
                            <img src={symptompsImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Symptom;