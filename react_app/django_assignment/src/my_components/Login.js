import React from "react";
import "./css/Signup.css";
import "./css/Login.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      file: null,
    };
  }

  ChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlemainview = (event) => {
    let k = event.target.value;
    this.props.stateofmainview(k);
  };

  ChangeFile = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };
  submitform = (event) => {
    event.preventDefault();
    var data = new FormData();
    data.append("email", this.state.email);
    data.append("file", this.state.file);
    axios
      .post("http://localhost:8000/api/login", data, {
        //AxiosRequestConfig parameter
        withCredentials: true, //correct
      })
      .then((Response) => {
        if (Response.data.status === 403) {
          alert(Response.data.message);
        } else {
          this.props.logintrigger(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      email: "",
      file: null,
    });
  };

  render() {
    return (
      <div className="signupform Rectangle4">
        <div className="box">
          <div className="head">Log In</div>
          <p className="regbtn">
            {" "}
            New member?{" "}
            <button
              className="logbutton"
              onClick={this.handlemainview}
              value="signup"
            >
              Register{" "}
            </button>
          </p>
        </div>

        <div className="form">
          <form onSubmit={this.submitform}>
            <div className="mform">
              <ul id="formlist1">
                <li>
                  <span>Email</span>
                </li>
                <li>
                  <span>File</span>
                </li>
              </ul>
              <ul id="formlist2">
                <li>
                  <input
                    type="email"
                    name=""
                    id="2"
                    value={this.state.email}
                    onChange={this.ChangeEmail}
                    required="required"
                  />
                </li>

                <li>
                  <input
                    type="file"
                    name=""
                    id="3"
                    required="required"
                    onChange={this.ChangeFile}
                  />
                </li>
              </ul>
            </div>

            <div className="cra">
              <button className="lgn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
