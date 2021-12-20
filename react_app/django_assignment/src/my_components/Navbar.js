import React from "react";
import "./css/Navbar.css";
import main from './css/images/main.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonon: 0,
      currentview: "signup",
    };
  }

  handleclick = (event) => {
    if (event.target.value === "0") {
      this.setState({
        buttonon: "1",
      });
      this.props.stateofparent("dark");
    } else {
      this.setState({
        buttonon: "0",
      });
      this.props.stateofparent("light");
    }
    console.log(this.props.loginstatus);
    console.log(typeof this.props.loginstatus);
    // event.preventDefault
  };

  handlemainview = (event) => {
    let k = event.target.value;
    this.props.stateofmainview(k);
  };
  handleLogout = (event) => {
    let k = event.target.value;
    this.props.stateofmainview(k);
    this.props.logintrigger(false);
  };

  render() {
    let content;
    if (!this.props.loginstatus) {
      content = (
        <>
                <div className="Rectangle1">
                    <img src={main} alt='main' />
                    <a>
                        <div className="nav1">FileAuth</div>
                    </a>
                    <div className="nav2">About</div>
                    <div className="nav3">Contact</div>
                </div>

        </>
      );
    } else {
      content = (
        <>
          <li>
            <button onClick={this.handlemainview} value="home">
              Home
            </button>
          </li>
          <li>
            <button onClick={this.handlemainview} value="profile">
              Profile
            </button>
          </li>
          <li>
            <button onClick={this.handleLogout} value="logout">
              Log Out
            </button>
          </li>
        </>
      );
    }

    return (
      <div className="nav">

            
      <div className="Rectangle2">
                    <img src={main} alt='main' />
                    <div className="nav1">FileAuth</div>
                    
                    <div className="nav2">About</div>
                    <div className="nav3">Contact</div>
                </div>

        
      </div>
    );
  }
}

export default Navbar;
