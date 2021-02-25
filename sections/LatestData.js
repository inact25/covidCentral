import React, {Component} from 'react';

import {getAllData} from "../pages/api/CovidApi";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
import {CFormater} from "../pages/tools/CFormater";
import dynamic from 'next/dynamic'

const CovChart = dynamic(() => import("../components/CovChart"))


class LatestData extends Component {
    state = {
        allData: [],
        isLoaded: false,
        mounted: false

    }

    getAllData = () => {
        getAllData()
            .then((res) => {
                this.setState({
                    allData: res,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
    }

    componentDidMount() {
        this.getAllData()
        this.setState({
            mounted: !this.state.mounted
        })
    }

    openAllData = () => {
        const datas = this.state.allData
        const MySwal = withReactContent(Swal)
        MySwal.fire({
                title: '',
                html: <div className="table-responsive mt-5">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="text-left">Country</th>
                            <th scope="col" className="text-right text-danger">Confirmed</th>
                            <th scope="col" className="text-right text-danger">Critical</th>
                            <th scope="col" className="text-right text-success">Recovered</th>
                            <th scope="col" className="text-right text-danger">Deaths</th>
                        </tr>
                        </thead>
                        <tbody>
                        {datas.map((item, index) =>
                            <tr>
                                <th scope="row">{index}</th>
                                <td className="text-left">{item.country}</td>
                                <td className="text-right text-danger">{CFormater(item.confirmed)}</td>
                                <td className="text-right text-danger">{CFormater(item.critical)}</td>
                                <td className="text-right text-success">{CFormater(item.recovered)}</td>
                                <td className="text-right text-danger">{CFormater(item.deaths)}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            }
        )
    }

    render() {
        console.log("mont")
        console.log(this.state.mounted)

        return (
            <section className="latestdata">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2>Latest Data</h2>
                        </div>
                        <div className="col-12 text-center mb-5">
                            <div>
                                <div>
                                    {this.state.mounted ?
                                        <CovChart/>
                                        :
                                        <div><img src={'/assets/img/loading.gif'} alt="" height={100}/><p>Loading...</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 data-table text-center">
                            <button onClick={this.openAllData}
                                    className="btn-outline-danger btn-lg btn rounded-pill">See all data
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestData;