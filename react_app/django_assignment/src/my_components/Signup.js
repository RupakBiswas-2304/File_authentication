import React from "react";
import upload from "./css/images/upload.png";
import boxsvg from "./css/images/box.svg";
import "./css/Signup.css";
import main from "./css/images/main.png";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      age: "",
      password: "",
    };
  }
  isNumeric = (num) =>
    (typeof num === "number" || typeof num === "string") &&
    num.trim() !== "" &&
    !isNaN(num);

  ChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  ChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  ChangePhoneno = (event) => {
    this.setState({
      phoneno: event.target.value,
    });
  };
  ChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  ChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handlemainview = (event) => {
    let k = event.target.value;
    this.props.stateofmainview(k);
  };
  submitform = (event) => {
    let v = this.isNumeric(this.state.phoneno);

    if (v) {
      console.log(`Name : ${this.state.name}
                     Email: ${this.state.email}
                     phoneno:${this.state.phoneno}
                     Age:${this.state.age}
                     Password: ${this.state.password}
                     validation: ${v}`);
      this.setState({
        name: "",
        email: "",
        phoneno: "",
        age: 0,
        password: "",
      });
    } else {
      alert("Enter your Phone no correctly");
    }
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="Rectangle">
          <div className="Rectangle4">
            <div className="texts">
              <h1>Create new Account</h1>
              <p className="logbtn">
                {" "}
                Already a member?{" "}
                <button
                  className="logbutton"
                  onClick={this.handlemainview}
                  value="login"
                >
                  Login{" "}
                </button>
              </p>

              <div className="Rectangle5">
                <input
                  type="text"
                  className="fn"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="Rectangle6">
                <input
                  type="text"
                  className="ln"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="Rectangle7">
                <input
                  type="text"
                  className="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="Rectangle8">
                <input
                  type="text"
                  className="phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="Rectangle9">
                <input
                  type="file"
                  name=""
                  id="3"
                  required="required"
                  onChange={this.ChangeFile}
                />{" "}
                <div className="uf">Upload File</div>
                <div className="upload">
                  <img src={upload} alt="upld" />
                </div>
              </div>
              <div className="Rectangle10">
                <div className="cra">Create Account</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;