import React from 'react';
import './css/Profile.css';
import axios from "axios";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount (){
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/user',
            withCredentials: true ,
          };
          
          axios(config)
          .then(function (Response) {
            console.log(JSON.stringify(Response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // getdetails = (event) =>{
    //     axios({
    //         method: 'get',
    //         url: 'http://127.0.0.1:8000/api/user',
    //       }).then(Response => {
    //         console.log(Response)
    //         console.log(Response.data.status)
    //         if((Response.data.status) === 200){
    //             alert("working well")
    //         }
    //         else(
    //             alert(Response.data.message)
    //         )
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     });
    // }
    render(){
        return(
            <div className="profile">
                <ul>
                    <li>
                        <span>Id</span> {this.props.id}
                    </li>
                    <li>
                        <span>Name</span> {this.props.name}
                    </li>
                    <li>
                        <span>Email</span> {this.props.email}
                    </li>
                    <li>
                        <span>Age</span> {this.props.age}
                    </li>
                    <li>
                        <span>Phone no </span> {this.props.phoneno}
                    </li>
                    {/* <button onClick = {this.getdetails}>click</button> */}
                </ul>
            </div>
        )
    }
}

export default Profile