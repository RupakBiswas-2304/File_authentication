import React, { Component } from "react";
import { Link } from "react-router-dom";
import main from "../css/images/main.png";
import "../App.css";
class Navbar extends Component {
    render() {
        console.log("in navbar", this.props.user);
        return (
            <nav className="navbar navbar-expand-lg navbar-light mb-4">
                <div className="container-fluid">
                    <img src={main} />
                    <Link className="navbar-brand" to="/">
                        FileAuth
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/RupakBiswas-2304/File_authentication"
                                >
                                    GitHub
                                </a>
                            </li>
                            {this.props.user ? (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/profile"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/register"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
