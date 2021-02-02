import React, {Component} from 'react';
import symptompsImg from "../assets/img/symptoms.png"
import {AiOutlineInfoCircle,AiFillCheckCircle} from "react-icons/all"

class Symptom extends Component {
    render() {
        return (
            <section className="symptom">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <img src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <img src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80" className="card-img-top" alt="..."/>
                                        </div>
                                    </div>
                                </div><div className="col-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80" className="card-img-top" alt="..."/>
                                    </div>
                                </div>
                            </div><div className="col-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <img src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80" className="card-img-top" alt="..."/>
                                    </div>
                                </div>
                            </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
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
                                <div className="col-12">
                                    <span className="text-success"><AiFillCheckCircle/></span> Hard Cought
                                </div>
                                <div className="col-12">
                                    <span className="text-success"><AiFillCheckCircle/></span> Resoiratory Distress
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Symptom;