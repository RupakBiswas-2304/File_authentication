import React from 'react'
import './Login.css'
// import axios from "axios";
// import { API_URL } from '../constants'

class Signup extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
        
    }

    ChangeEmail = (event)=> {
        this.setState({
            email: event.target.value
        })
    }

    ChangePassword = (event)=> {
        this.setState({
            password: event.target.value
        })
    }
    submitform =(event) => {
        console.log(`
            Email: ${this.state.email}
            Password: ${this.state.password}`)
        this.setState({   
            email:'',
            password:'',
        })
       
        event.preventDefault()
    }

    render(){
        return (
            <div className="signupform">
                <div className="head">
                    Log In
                </div>
                <div className="form">
                    <form onSubmit = {this.submitform}>
                        <div className="mform">
                            <ul id="formlist1">
                                <li><span>Email</span></li>
                                <li><span>Password</span></li>
                            </ul>
                            <ul id="formlist2">
                                
                                <li>                       
                                    <input type="email" name="" id="2" value = {this.state.email} onChange={this.ChangeEmail} required='required'/>
                                </li>
                                
                                <li>
                                    <input type="password" name="" id="3"  required='required' value = {this.state.password} onChange={this.ChangePassword}/>
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