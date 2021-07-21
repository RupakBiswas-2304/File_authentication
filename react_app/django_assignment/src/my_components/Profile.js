import React from 'react';
import './css/Profile.css';

class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <ul>
                    <li>
                        <span>Id</span> 5
                    </li>
                    <li>
                        <span>Name</span> Dark
                    </li>
                    <li>
                        <span>Email</span> Dark@dark.com
                    </li>
                    <li>
                        <span>Age</span> 18
                    </li>
                    <li>
                        <span>Phone no </span> 977
                    </li>
                </ul>
            </div>
        )
    }
}

export default Profile