import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{`Enables ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// This is type checking of props to ensure that passed props is of same type of required.
Navbar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}

// This is passing default props when nothing is passed as props.
Navbar.defaultProps = {
    title: "Set title",
    about: "Set about"
}