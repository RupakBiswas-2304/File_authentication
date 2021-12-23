import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./input";
import "../App.css";
class Form extends React.Component {
    validate() {
        const res = Joi.validate(this.state.data, this.schema, {
            abortEarly: false,
        });
        // console.log(res.error);
        if (res.error) return res.error.details[0].message;
        return null;
    }
    validateProperty(name, value) {
        const prop = { [name]: value };
        const subschema = { [name]: this.schema[name] };
        const res = Joi.validate(prop, subschema, { abortEarly: false });
        if (res.error) return res.error.details[0].message;
        return null;
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        const err = this.validate();
        if (err) {
            this.setState({ error: err });
            return;
        }
        this.setState({ error: {} });
        this.onSubmit();
    };
    HandleFileChange = (e) => {
        const { name, files } = e.currentTarget;
        const data = { ...this.state.data };
        data[name] = files[0];
        this.setState({ data });
    };
    HandleChange = (e) => {
        const { name, value } = e.currentTarget;
        const err = this.validateProperty(name, value);
        const error = { ...this.state.error };
        if (err) error[name] = err;
        else delete error[name];

        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data, error });
    };
    renderInput(name, label, type = "text") {
        return (
            <Input
                type={type}
                onChange={
                    type === "file" ? this.HandleFileChange : this.HandleChange
                }
                name={name}
                label={label}
                error={this.state.error[name]}
            />
        );
    }
    renderButton(label, path) {
        return (
            <button
                className="btn btn-success"
                style={{ width: "425px", marginLeft: "13px" }}
            >
                {label}
            </button>
        );
    }
}

export default Form;
