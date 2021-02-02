import './App.css';
import './assets/style/main.css'
import React, {Component} from 'react';
import Hero from "./sections/Hero";
import InfoBar from "./sections/InfoBar"
import About from "./sections/About"
import Symptom from "./sections/Symptom"
import LatestData from "./sections/LatestData"
import Info from "./sections/Info"
import Navbar from "./sections/Navbar"
import HowTo from "./sections/HowTo"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Hero/>
                <InfoBar/>
                <About/>
                <Symptom/>
                <LatestData/>
                <Info/>
                <HowTo/>
                <CTA/>
                <Footer/>
            </div>
        );
    }
}

export default App;
