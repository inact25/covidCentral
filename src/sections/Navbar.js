import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="shadow fixed-top navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">covidCentral</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item my-auto">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className=" rounded-pill btn btn-danger btn-lg ml-3 btn-block" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;