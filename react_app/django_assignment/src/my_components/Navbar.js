import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            buttonon:0,
            currentview:"signup",
        }
        this.handleclick.bind(this);
        this.handlemainview.bind(this);
    }

    handleclick = (event) => {
        if(event.target.value === '0'){
            this.setState({
                buttonon:'1'
            })
            this.props.stateofparent("dark");
        }
        else{
            this.setState({
                buttonon:'0'
            })
            this.props.stateofparent("light");
        }
        // event.preventDefault
    }

    handlemainview = (event) =>{
        let k  = event.target.value
        this.props.stateofmainview(k)
    }

    render(){
    return (
        <div className="nav">
            <div className="logo">
                <h2>
                    Django Assignment
                </h2>
            </div>
            <div className="items">
                <ul>
                    <li>
                        <button onClick = {this.handlemainview} value="signup">SIGN UP</button>
                    </li>
                    <li>
                        <button onClick = {this.handlemainview} value="login">LOG IN</button>
                    </li>
                    <li>
                        <button onClick = {this.handleclick} value={this.state.buttonon}>Theme</button>
                    </li>
                </ul>
            </div>
        </div>

    )}
}

export default Navbar