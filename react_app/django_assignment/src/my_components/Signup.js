import React from 'react'
import './Signup.css'
import axios from "axios";
import { API_URL } from '../constants'

class Signup extends React.Component{
    
    state = {
        name : "",
        email: "",
        age:null,
        phoneno:"",
        password:"",
    };

    componentDidMount(){
        if(this.props.user){
            const{name,email,age,phoneno,password} = this.props.user;
            this.setState({name,email,age,phoneno,password})
        }
    }

    onchange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    createUser = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
          this.props.resetState();
          this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render(){
        return (
            <div className="signupform">
                <div className="head">
                    Sign Up
                </div>
                <div className="form">
                    <form action="POST">
                        <div className="mform">
                            <ul id="formlist1">
                                <li><span>Name</span></li>
                                <li><span>Email</span></li>
                                <li><span>Age    </span></li>
                                <li><span>Phone No</span></li>
                                <li><span>Password</span></li>
                            </ul>
                            <ul id="formlist2">
                                <li>                     
                                    <input type="text" name="name" id="1" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.name)} required='required'/>
                                </li>
                                <li>                       
                                    <input type="email" name="" id="2" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.email)} required='required'/>
                                </li>
                                <li>                  
                                    <input type="number" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.age)} required='required'/>
                                </li>
                                <li>                     
                                    <input type="text" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.phoneno)} required='required'/>
                                </li>
                                <li>
                                    <input type="password" name="" id="3" onChange={this.onChange} defaultValue={this.defaultIfEmpty(this.state.password)} required='required'/>
                                </li>
                            </ul>
    
                        </div>
                    
                        <button type="submit"  >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;