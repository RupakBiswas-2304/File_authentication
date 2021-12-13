import React from "react";
import "./css/Profile.css";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      f_name: "",
      email: "",
      l_name: "",
      phoneno: 0,
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:8000/api/user",
      withCredentials: true,
    })
      .then((Res) => {
        this.setState({
          id: Res.data.message.id,
          f_name: Res.data.message.f_name,
          email: Res.data.message.email,
          l_name: Res.data.message.l_name,
          phoneno: Res.data.message.phoneno,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="profile">
        <ul>
          <li>
            <span>Id</span> {this.state.id}
          </li>
          <li>
            <span>First Name</span> {this.state.f_name}
          </li>
          <li>
            <span>last Name</span> {this.state.l_name}
          </li>
          <li>
            <span>Email</span> {this.state.email}
          </li>
          <li>
            <span>Phone no </span> {this.state.phoneno}
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
