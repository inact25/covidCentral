import React, {Component} from 'react';
import {AiFillGithub, FaFacebook, FiInstagram, SiMailDotRu} from 'react-icons/all'

class Footer extends Component {
    render() {
        return (
            <section className="footer text-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-3">
                            <h3>About</h3>
                            <p>
                                What is novel coronavirus?
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered
                                coronavirus. Most people infected with the COVID-19 virus will experience mild to
                                moderate
                                respiratory illness and recover without requiring special treatment.</p>
                        </div>
                        <div className="col-3">
                            <h3>Link</h3>
                            <li>Disclaimer</li>
                            <li>Hubungi kami</li>
                            <li>Tentang</li>
                        </div>
                        <div className="col-3">
                            <h3>Info Center</h3>
                            <li>Who Information</li>
                            <li>Covid 19 Wikipedia</li>
                            <li>CNN News</li>
                            <li>Worldometer Info</li>
                        </div>
                        <div className="col-3">
                            <h3>Social</h3>
                            <div className="row">
                                <div className="col"><FaFacebook/></div>
                                <div className="col"><FiInstagram/></div>
                                <div className="col"><AiFillGithub/></div>
                                <div className="col"><SiMailDotRu/></div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="copyright text-grey">
                        Copyright @2021 Angga Adji Surya
                    </div>
                </div>

            </section>
        );
    }
}

export default Footer;