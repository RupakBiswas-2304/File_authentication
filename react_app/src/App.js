import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./my_components/navbar";
import Home from "./my_components/home.jsx";
import Register from "./my_components/register";
import Login from "./my_components/login";
import About from "./my_components/about";
import Logout from "./my_components/logout";
import Profile from "./my_components/profile";
import user from "./services/userService";
import "./App.css";
class App extends Component {
    state = {
        user: null,
    };
    async componentDidMount() {
        this.setState({ user: await user.getUser() });
    }
    render() {
        return (
            <div className="fullPage">
                <Navbar user={this.state.user} />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        );
    }
}

export default App;
