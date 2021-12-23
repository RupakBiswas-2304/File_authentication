import React, { Component } from "react";
import "../App.css";
class Input extends React.Component {
    render() {
        const { type, name, onChange, error, label } = this.props;
        return (
            <div className="form-group mb-2">
                <input
                    onChange={onChange}
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={label}
                    style={{ background: "transparent" }}
                />
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
            </div>
        );
    }
}

export default Input;
