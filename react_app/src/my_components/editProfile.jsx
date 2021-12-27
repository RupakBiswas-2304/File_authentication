import React, { Component } from "react";
import "../App.css";
class EditProfile extends React.Component {
    render() {
        const { user, onClick, onChange, onSave } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-4">
                        <p>First Name</p>
                    </div>
                    <div className="col-1">
                        <p>:</p>
                    </div>
                    <div className="col">
                        <input
                            name="f_name"
                            onChange={onChange}
                            value={user.f_name}
                            type="text"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Last Name</p>
                    </div>
                    <div className="col-1">
                        <p>:</p>
                    </div>
                    <div className="col">
                        <input
                            name="l_name"
                            onChange={onChange}
                            value={user.l_name}
                            type="text"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Email ID</p>
                    </div>
                    <div className="col-1">
                        <p>:</p>
                    </div>
                    <div className="col">
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Phone Number</p>
                    </div>
                    <div className="col-1">
                        <p>:</p>
                    </div>
                    <div className="col">
                        <input
                            name="phoneno"
                            onChange={onChange}
                            value={user.phoneno}
                            type="number"
                        />
                    </div>
                </div>
                <button onClick={onSave}>Save Changes</button>
            </React.Fragment>
        );
    }
}

export default EditProfile;
