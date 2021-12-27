import React, { Component } from "react";

class DisplayProfile extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Email</p>
                        <p>Phone Number</p>
                    </div>
                    <div className="col-1">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div className="col">
                        <p>{user.f_name}</p>
                        <p>{user.l_name}</p>
                        <p>{user.email}</p>
                        <p>{user.phoneno}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayProfile;
