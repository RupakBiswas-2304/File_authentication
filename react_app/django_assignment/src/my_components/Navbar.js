import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                <h2>
                    Django Assignment
                </h2>
            </div>
            <div className="items">
                <ul>
                    <li>Sign Up</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
