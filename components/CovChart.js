import React, {Component} from 'react';
import {getStats} from "../pages/api/CovidApi";
import Swal from "sweetalert2";

import CanvasJSReact from '../public/js/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CovChart extends Component {
    state = {
        data: [],
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

    componentDidMount() {
        this.getStatsData()
    }

    render() {
        const stats = this.state.data
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
            <div>{this.state.isLoaded ?
                <CanvasJSChart options={options}
                               onRef={ref => this.chart = ref}
                />
                : <div><img src={'/assets/img/loading.gif'} alt="" height={100}/><p>Loading...</p>
                </div>
            }
            </div>
        );
    }
}

export default CovChart;