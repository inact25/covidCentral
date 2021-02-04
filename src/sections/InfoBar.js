import React, {Component} from 'react';

class InfoBar extends Component {
    render() {
        return (
            <section className="infobar">
                <div className="container infobar-container pt-5 pb-4 px-5 text-center">
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>204</h3><p>Recovered Case</p></div>
                        <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>205</h3><p>Recovered Case</p></div>
                        <div className="col-6 col-md-3 col-lg-3 text-success"><h3>207</h3><p>Recovered Case</p></div>
                        <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>207</h3><p>Recovered Case</p></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InfoBar;