import React, {Component} from 'react';
import CanvasJSReact from '../assets/js/canvasjs.react';
import {getAllData, getStats} from "../services/apis/CovidApi";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
import {CFormater} from "../services/tools/CFormater";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class LatestData extends Component {
    state = {
        data: [],
        allData: [],
        isLoaded: false
    }

    constructor(props) {
        super(props);
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

    getStatsData = () => {
        getStats()
            .then((res) => {
                this.setState({
                    data: res.data,
                    isLoaded: true
                })
            }).catch(() => {
            Swal.fire("Oops", "Connection Timeout !!!", "error")
        })
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
        this.getStatsData()
        this.getAllData()
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
        const stats = this.state.data
        console.log(this.state.allData)
        const options = {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: ""
            },
            axisY: {
                title: "Covid data"
            },
            toolTip: {
                shared: true
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                reversed: true,
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            data: [
                {
                    type: "stackedArea",
                    name: "confirmed",
                    showInLegend: true,
                    dataPoints: stats.map(item => {
                        return {x: new Date(item.date), y: item.confirmed}
                    })
                },
                {
                    type: "stackedArea",
                    name: "recovered",
                    showInLegend: true,
                    xValueFormatString: "MMMM YYYY",
                    dataPoints: stats.map(item => {
                        return {x: new Date(item.date), y: item.recovered}
                    })
                },
                {
                    type: "stackedArea",
                    name: "critical",
                    showInLegend: true,
                    xValueFormatString: "MMMM YYYY",
                    dataPoints: stats.map(item => {
                        return {x: new Date(item.date), y: item.critical}
                    })
                },
                {
                    type: "stackedArea",
                    name: "deaths",
                    showInLegend: true,
                    xValueFormatString: "MMMM YYYY",
                    dataPoints: stats.map(item => {
                        return {x: new Date(item.date), y: item.deaths}
                    })
                },
            ]
        }
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
                                    <CanvasJSChart options={options}
                                                   onRef={ref => this.chart = ref}
                                    />
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