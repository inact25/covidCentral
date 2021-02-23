import React, {Component} from 'react';

class Cta extends Component {
    render() {
        return (
            <section className="cta">
                <div className="container cta-container text-center mb-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row p-0 p-sm-3 m-3">
                                <div className="col-12"><h2>Want to test covid-19?</h2>
                                    <p>Our goal at World in Data is to provide testing data over time for many countries
                                        around the world</p></div>
                                <div className="col-12 col-md-6 col-lg-6 mb-3">
                                    <button className="btn btn-outline-danger btn-lg rounded-pill">Check my body
                                    </button>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 mb-3">
                                    <button className="btn btn-danger btn-lg rounded-pill">Get Information</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Cta;