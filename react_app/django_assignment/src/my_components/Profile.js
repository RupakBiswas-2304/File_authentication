import React from 'react';
import './css/Profile.css';
import axios from "axios";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : 0,
            name : "",
            email : "",
            age : 0,
            phoneno : 0
        }
      }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/user',
            withCredentials: true
          }).then(Res => {
            this.setState({
                id : Res.data.message.id,
                name : Res.data.message.name,
                email : Res.data.message.email,
                age : Res.data.message.age,
                phoneno : Res.data.message.phoneno
            })
        })
        .catch(error =>{
            console.log(error)
        });
    }
    render(){
        return(
            <div className="profile">
                <ul>
                    <li>
                        <span>Id</span> {this.state.id}
                    </li>
                    <li>
                        <span>Name</span> {this.state.name}
                    </li>
                    <li>
                        <span>Email</span> {this.state.email}
                    </li>
                    <li>
                        <span>Age</span> {this.state.age}
                    </li>
                    <li>
                        <span>Phone no </span> {this.state.phoneno}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Profile