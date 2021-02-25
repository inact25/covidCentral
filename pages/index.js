import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import InfoBar from "../sections/InfoBar";
import Symptom from "../sections/Symptom";
import About from "../sections/About";
import Info from "../sections/Info";
import HowTo from "../sections/HowTo";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";
import LatestData from "../sections/LatestData";


export default function Home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <InfoBar/>
            <About/>
            <Symptom/>
            <LatestData/>
            <Info/>
            <HowTo/>
            <CTA/>
            <Footer/>
        </div>

    )
}
