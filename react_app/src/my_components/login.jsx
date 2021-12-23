import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";
import User from "../services/userService";
import "../App.css";
class Login extends Form {
    state = {
        data: {
            email: "",
            file: null,
        },
        error: {},
    };
    schema = {
        email: Joi.string().email().required().label("Email"),
        file: Joi.required().label("File"),
    };
    onSubmit = async () => {
        try {
            const { email, file } = this.state.data;
            const data = await User.login(email, file);
            window.location = "/";
        } catch (ex) {
            console.log(ex.response.data);
        }
    };
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.HandleSubmit} className="form">
                    <div className="container">
                        <h3>LogIn</h3>
                        <div className="row">
                            {this.renderInput("email", "Email", "mail")}
                        </div>
                        <div className="row">
                            {this.renderInput("file", "File", "file")}
                        </div>
                        <div className="row">
                            {this.renderButton("Login", "/login")}
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;
