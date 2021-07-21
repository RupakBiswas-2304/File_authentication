import React from 'react'
import './css/Signup.css'
// import axios from "axios";
// import { API_URL } from '../constants'

class Signup extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            name :'',
            email:'',
            phoneno:'',
            age:'',
            password:'',
        }
        
    }
    isNumeric = (num) => ((typeof(num) === 'number' || typeof(num) === "string" )&& (num.trim() !== '')) && !isNaN(num);

    ChangeName = (event)=> {
        this.setState({
            name: event.target.value
        })
    }
    ChangeEmail = (event)=> {
        this.setState({
            email: event.target.value
        })
    }
    ChangePhoneno = (event)=> {
        this.setState({
            phoneno: event.target.value
        })
    }
    ChangeAge = (event)=> {
        this.setState({
            age: event.target.value
        })
    }
    ChangePassword = (event)=> {
        this.setState({
            password: event.target.value
        })
    }
    submitform =(event) => {
        let v = this.isNumeric(this.state.phoneno)

        if(v){
            console.log(`Name : ${this.state.name}
                     Email: ${this.state.email}
                     phoneno:${this.state.phoneno}
                     Age:${this.state.age}
                     Password: ${this.state.password}
                     validation: ${v}`)
            this.setState({
                name :'',
                email:'',
                phoneno:'',
                age:0,
                password:'',
            })
        }
        else{
            alert("Enter your Phone no correctly")
        }
        event.preventDefault()
    }

    render(){
        return (
            <div className="signupform">
                <div className="head">
                    Sign Up
                </div>
                <div className="form">
                    <form onSubmit = {this.submitform}>
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
                                    <input type="text" name="name" id="1" value = {this.state.name} onChange={this.ChangeName} required='required'/>
                                </li>
                                <li>                       
                                    <input type="email" name="" id="2" value = {this.state.email} onChange={this.ChangeEmail} required='required'/>
                                </li>
                                <li>                  
                                    <input type="number"  required='required' value = {this.state.age} onChange={this.ChangeAge}/>
                                </li>
                                <li>                     
                                    <input type="text"  required='required' value = {this.state.phoneno} onChange={this.ChangePhoneno}/>
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