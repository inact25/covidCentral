import React, {Component} from 'react';
import service1 from "../assets/img/service1.png"
import service2 from "../assets/img/service2.png"
import service3 from "../assets/img/service3.png"
import service4 from "../assets/img/service4.png"
import service5 from "../assets/img/service5.png"
import service6 from "../assets/img/service6.png"

class HowTo extends Component {

    render() {
        return (
            <section className="howto">
                <div className="container py-5 my-2">
                    <div className="row text-center">
                        <div className="col-12 text-center mb-5">
                            <h2>How can I protect myself from Covid-19?</h2>
                            <p>If you are traveling overseas (to China but also to other places)
                                follow the CDC’s guidance:</p>
                        </div>
                        <div className="col-6">
                            <h5>What you should do</h5>
                            <div className="row mt-5">
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service1}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Wear Facemask</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service2}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Cover Face When Coughing</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service3}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Wash Your Hand Frequently</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"><h5>What you shouldn't do</h5>
                            <div className="row mt-5">
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service4}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Avoid Animal Contact</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service5}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Avoid Markets and Crowd</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4 d-flex flex-wrap align-items-center">
                                                    <img
                                                        src={service6}
                                                        alt="" className="img-fluid m-auto"/>
                                                </div>
                                                <div className="col-8 text-left">
                                                    <h5>Seek Medical Care</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
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

export default HowTo;