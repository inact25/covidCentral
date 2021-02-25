import React, {Component} from 'react';
import {navAction, navLink, siteTitle} from "../variables/SitesData";

class Navbar extends Component {
    render() {
        return (
            <nav className="shadow fixed-top navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container">
                    <a className="navbar-brand" href="/">{siteTitle}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {navLink.map(item =>
                                <li className="nav-item my-auto">
                                    <a className="nav-link active mx-3 mb-3 mb-md-0" aria-current="page"
                                       href={item.url}>{item.title}</a>
                                </li>
                            )}
                            <li className="nav-item my-auto">
                                <a className="nav-act-btn rounded-pill btn btn-danger btn-lg btn-block"
                                   href={navAction.url}>{navAction.title}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;