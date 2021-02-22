import React, {Component} from 'react';
import {heroBadge, heroTitle} from "../variables/HeroData";
import Hero from "../components/Hero"

class HeroSection extends Component {
    render() {
        return (
            <Hero badgeIcon={heroBadge.icon} badgeText={heroBadge.text} heroTitle={heroTitle.title}
                  heroSubtitle={heroTitle.subtitle} heroActionText={heroTitle.actionText} image={heroTitle.image}/>
        );
    }

}

export default HeroSection;