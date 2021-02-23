import React, {Component} from 'react';
import Loading from "../assets/img/loading.gif"
import {getSummary} from "../services/apis/CovidApi";
import Swal from "sweetalert2"
import {nFormatter} from "../services/tools/NFormater";

class InfoBar extends Component {

    state = {
        data: [],
        isLoaded: false
    }
    getNewsData = () => {
        getSummary()
            .then((res) => {
                this.setState({
                    data: res,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        this.getNewsData()
    }

    render() {
        const data = this.state.data[0]
        console.log("data")
        console.log(data)
        return (
            <section className="infobar">
                <div className="container infobar-container pt-5 pb-4 px-5 text-center">
                    {this.state.isLoaded ?
                        <div className="row">
                            <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>{nFormatter(data.confirmed)}</h3>
                                <p>Confirmed Case</p></div>
                            <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>{nFormatter(data.critical)}</h3>
                                <p>Critical Case</p></div>
                            <div className="col-6 col-md-3 col-lg-3 text-success"><h3>{nFormatter(data.recovered)}</h3>
                                <p>Recovered Case</p></div>
                            <div className="col-6 col-md-3 col-lg-3 text-danger"><h3>{nFormatter(data.deaths)}</h3>
                                <p>Death Case</p></div>
                        </div>
                        : <div><img src={Loading} alt="" height={100}/><p>Loading...</p></div>

                    }
                </div>
            </section>
        );
    }
}

export default InfoBar;