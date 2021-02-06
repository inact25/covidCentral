import React, {Component} from 'react';
import {heroBadge, heroTitle} from "../variables/HeroData";

class Hero extends Component {
    render() {
        return (
            <Hero badgeIcon={heroBadge.icon} badgeText={heroBadge.text} heroTitle={heroTitle.title}
                  heroSubtitle={heroTitle.subtitle} heroActionText={heroTitle.actionText} image={heroTitle.image}/>
        );
    }

}

export default Hero;