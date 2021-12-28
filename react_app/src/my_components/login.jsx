import React, { Component } from "react";
import { toast } from "react-toastify";
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
            console.log(email, file);
            const { data } = await User.login(email, file);
            if (data.status >= 400) {
                this.setState({ error: data.message });
                toast.error(this.state.error);
                return;
            }
            this.setState({ error: {} });
            window.location = "/";
        } catch (ex) {}
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
