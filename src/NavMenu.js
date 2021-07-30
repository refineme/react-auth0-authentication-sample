import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavMenu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/UserProfile">Profile</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavMenu;
