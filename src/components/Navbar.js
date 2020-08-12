import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <a className="navbar-brand text-light" href="#" id="start">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                <ul className="navbar-nav md-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#" id="home">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary" href="#" id="about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="#" id="services">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary" href="#" id="contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};



export default Navbar;