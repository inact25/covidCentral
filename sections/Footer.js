import React, {Component} from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {SiMailDotRu} from 'react-icons/si'

class Footer extends Component {
    render() {
        return (
            <section className="footer text-light">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <h3>About</h3>
                            <p>
                                What is novel coronavirus?
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered
                                coronavirus. Most people infected with the COVID-19 virus will experience mild to
                                moderate
                                respiratory illness and recover without requiring special treatment.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <h3>Link</h3>
                            <li><a href="">Disclaimer</a></li>
                            <li><a href="">Hubungi kami</a></li>
                            <li><a href="">Tentang</a></li>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <h3>Info Center</h3>
                            <li><a href="">Who Information</a></li>
                            <li><a href="">Covid 19 Wikipedia</a></li>
                            <li><a href="">CNN News</a></li>
                            <li><a href="">Worldometer Info</a></li>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <h3>Social</h3>
                            <div className="row">
                                <div className="col social-icon"><a href=""><FaFacebook/></a></div>
                                <div className="col social-icon"><a href=""><FiInstagram/></a></div>
                                <div className="col social-icon"><a href=""><AiFillGithub/></a></div>
                                <div className="col social-icon"><a href=""><SiMailDotRu/></a></div>
                            </div>
                        </div>
                    </div>
                    {/*<hr/>*/}
                    {/*<div className="copyright text-grey">*/}
                    {/*    Copyright @2021 Angga Adji Surya*/}
                    {/*</div>*/}
                </div>

            </section>
        );
    }
}

export default Footer;