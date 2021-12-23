import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";
import User from "../services/userService";
import "../App.css";
class Register extends Form {
    state = {
        data: {
            lname: "",
            fname: "",
            phone: "",
            email: "",
            file: null,
        },
        error: {},
    };
    schema = {
        lname: Joi.string().required().label("Last Name"),
        fname: Joi.string().required().label("First Name"),
        phone: Joi.string().required().length(10).label("Phone Number"),
        email: Joi.string().email().required().label("Email"),
        file: Joi.required().label("File"),
    };
    onSubmit = async () => {
        try {
            const data = await User.register(this.state.data);
            window.location = "/login";
        } catch (ex) {
            console.log(ex);
            alert(ex.response.error);
        }
    };
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.HandleSubmit} className="form">
                    <div className="container">
                        <h3>Create New Account</h3>
                        <div className="row">
                            <div className="col">
                                {this.renderInput("fname", "First Name")}
                            </div>
                            <div className="col">
                                {this.renderInput("lname", "Last Name")}
                            </div>
                        </div>
                        <div className="row">
                            {this.renderInput("email", "Email", "mail")}
                        </div>
                        <div className="row">
                            <div className="col">
                                {this.renderInput(
                                    "phone",
                                    "phone number",
                                    "number"
                                )}
                            </div>
                            <div className="col">
                                {this.renderInput("file", "File", "file")}
                            </div>
                        </div>
                        <div className="row">
                            {this.renderButton("Register", "/register")}
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default Register;
