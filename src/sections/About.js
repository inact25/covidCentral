import React, {Component} from 'react';
import aboutImg from "../assets/img/coronaImg.png"
import {AiOutlineInfoCircle} from "react-icons/all"

class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 order-1 order-md-1 order-lg-1">
                            <img src={aboutImg} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-2 order-lg-2">
                            <p className="hero-badge">
                                <AiOutlineInfoCircle/>   Covid-19 Alert
                            </p>
                            <h2>
                                What is novel coronavirus?
                            </h2>
                            <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered
                                coronavirus.

                                Most people infected with the COVID-19 virus will experience mild to moderate
                                respiratory illness and recover without requiring special treatment. Older people, and
                                those with underlying medical problems like cardiovascular disease, diabetes, chronic
                                respiratory disease, and cancer are more likely to develop serious illness.</p>
                            <p>The best way to prevent and slow down transmission is to be well informed about the
                                COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others
                                from infection by washing your hands or using an alcohol based rub frequently and not
                                touching your face. </p>
                            <div className="hero-action mb-2 mt-5">
                                <button className="btn-danger btn btn-lg rounded-pill">Check Symptom</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        );
    }
}

export default About;