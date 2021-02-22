import React from 'react';

const Hero = (props) => {
    const {badgeIcon, badgeText, heroTitle, heroSubtitle, heroActionText, image} = props
    return (
        <section className="hero jumbotron">
            <div className="container hero-container">
                <div className="row h-100">
                    <div className="col-12 col-md-12 col-lg-6 my-auto order-2 order-md-2 order-lg-1">
                        <p className="hero-badge">
                            {badgeIcon} {badgeText}
                        </p>
                        <div className="hero-title mb-2">
                            <h1>{heroTitle}</h1>
                        </div>
                        <div className="hero-caption mb-5">
                            <h5>{heroSubtitle}</h5>
                        </div>
                        <div className="hero-action mb-2">
                            <button className="btn-danger btn btn-lg rounded-pill">{heroActionText}</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2">
                        <img className="img-fluid mb-5" src={image} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;