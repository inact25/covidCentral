import React, {Component} from 'react';
import CanvasJSReact from '../assets/js/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


class LatestData extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
    toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }
    render() {
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
                    xValueFormatString: "YYYY",
                    dataPoints: [
                        {x: new Date(1990, 0), y: 339},
                        {x: new Date(2000, 0), y: 448},
                        {x: new Date(2010, 0), y: 588},
                        {x: new Date(2016, 0), y: 616}
                    ]
                },
                {
                    type: "stackedArea",
                    name: "recovered",
                    showInLegend: true,
                    xValueFormatString: "YYYY",
                    dataPoints: [
                        {x: new Date(1990, 0), y: 63},
                        {x: new Date(2000, 0), y: 100},
                        {x: new Date(2010, 0), y: 149},
                        {x: new Date(2016, 0), y: 152}
                    ]
                },
                {
                    type: "stackedArea",
                    name: "critical",
                    showInLegend: true,
                    xValueFormatString: "YYYY",
                    dataPoints: [
                        {x: new Date(1990, 0), y: 48},
                        {x: new Date(2000, 0), y: 100},
                        {x: new Date(2010, 0), y: 119},
                        {x: new Date(2016, 0), y: 107},
                    ]
                },
                {
                    type: "stackedArea",
                    name: "deaths",
                    showInLegend: true,
                    xValueFormatString: "YYYY",
                    dataPoints: [
                        {x: new Date(1990, 0), y: 7 },
                        {x: new Date(2000, 0), y: 45},
                        {x: new Date(2010, 0), y: 243},
                        {x: new Date(2016, 0), y: 450},
                    ]
                },
                {
                    type: "stackedArea",
                    name: "active",
                    showInLegend: true,
                    xValueFormatString: "YYYY",
                    dataPoints: [
                        {x: new Date(1990, 0), y: 6},
                        {x: new Date(2000, 0), y: 22},
                        {x: new Date(2010, 0), y: 49},
                        {x: new Date(2016, 0), y: 91},
                    ]
                }
            ]
        }
        return (
            <section className="latestdata">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2>Latest Data</h2>
                        </div>
                        <div className="col-12 text-center">
                            <div>
                                <div>
                                    <CanvasJSChart options = {options}
                                                   onRef={ref => this.chart = ref}
                                    />
                                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestData;