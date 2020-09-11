import React from 'react';
import './NotFound.scss';
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <NavLink to="/Home" className="nav-link">Click to return to the main page</NavLink>

        </div>
    )
}

export default NotFound;
