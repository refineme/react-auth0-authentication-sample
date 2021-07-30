import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    const { isAuthenticated, loginWithAuth0 } = props.auth;
    return (
        <div>
            <h1>Home</h1>
            {isAuthenticated() ? (
                <Link to="/profile">My Profile</Link>
            ) : (
                <button onClick={loginWithAuth0}>Log In</button>
            )}
        </div>
    );
};
export default Dashboard;