import React, { Component } from "react";
import User from "../services/userService";
import DisplayProfile from "./displayProfile";
import EditProfile from "./editProfile";
import Joi from "joi-browser";
import "../App.css";
class Profile extends Component {
    state = {
        user: {},
        error: {},
        edit: false,
    };
    schema = {
        lname: Joi.string().required().label("Last Name"),
        fname: Joi.string().required().label("First Name"),
        phone: Joi.string().required().length(10).label("Phone Number"),
    };
    validate() {
        const res = Joi.validate(this.state.data, this.schema, {
            abortEarly: false,
        });
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
    async componentDidMount() {
        try {
            const user = await User.getUser();
            this.setState({ user });
        } catch (ex) {
            console.log("oeugphre");
            this.setState({ user: {} });
        }
    }
    handleEdit = () => {
        let clone = this.state.edit;
        clone = !clone;
        this.setState({ edit: clone });
    };
    handleChange = (e) => {
        console.log(e.currentTarget);
        const name = e.currentTarget.name;
        const val = e.currentTarget.value;
        const user = { ...this.state.user };
        user[name] = val;
        this.setState({ user });
    };
    HandleSaveChanges = async () => {
        await User.updateUser(this.state.user);
        this.setState({ edit: false });
    };
    render() {
        const { user, edit } = this.state;
        return (
            <div className="profile">
                <h1>
                    Profile{"  "}
                    <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                        onClick={this.handleEdit}
                    ></i>
                </h1>
                {edit ? (
                    <EditProfile
                        user={user}
                        onClick={this.handleEdit}
                        onChange={this.handleChange}
                        onSave={this.HandleSaveChanges}
                    />
                ) : (
                    <DisplayProfile user={user} />
                )}
            </div>
        );
    }
}

export default Profile;
