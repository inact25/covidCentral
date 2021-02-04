import React, {Component} from 'react';
import {AiFillCheckCircle, AiOutlineInfoCircle,MdPets,WiDayLightWind,FaHandshake,BsCircleSquare} from "react-icons/all"

class Info extends Component {
    render() {
        return (
            <section className="info">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6 text-center">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <span className="icon"><MdPets/></span>
                                            <h5>Animal Contact</h5>
                                            <p>Stay at home if you begin to feel unwell, even with mild symptoms nose.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <span className="icon"><WiDayLightWind/></span>
                                            <h5>Air Transmission</h5>
                                            <p>Via respiratory droplets produced when infected person coughs or sneezes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <span className="icon"><FaHandshake/></span>
                                           <h5>Personal Contact</h5>
                                           <p>Avoiding contact with others and visits to medical facilities will allow.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <span className="icon"><BsCircleSquare/></span>
                                            <h5>Contaminate Object</h5>
                                            <p>Call in advance and tell your provider of any recent travel or contact.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-12 col-lg-6 py-auto my-auto">
                            <p className="hero-badge">
                                <AiOutlineInfoCircle/> Covid-19 Alert
                            </p>
                            <h2>
                                How does novel coronavirus spread?
                            </h2>
                            <div className="info-description">
                                <p>COVID-19 Symptoms are from mild to severe. It takes 2-14 days after exposure for
                                    symptoms to develop. Symptoms may include:</p>
                                <div className="row">
                                    <div className="col-12 text-white mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Hard Cought
                                    </div>
                                    <div className="col-12 text-white mb-3">
                                        <span className="checklist"><AiFillCheckCircle/></span> Resoiratory Distress
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Info;