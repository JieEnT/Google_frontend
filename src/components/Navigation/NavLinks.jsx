import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './NavLinks.css'
import {AuthContext} from "../../context/auth-context";

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return(
        <React.Fragment>
            <li className="MenuItem">
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className="MenuItem">
                <NavLink to="/marketplace">
                    MarketPlace
                </NavLink>
            </li>
            {auth.isLoggedIn && <li className="MenuItem">
                <NavLink to="/u1/dashboard">
                    Dashboard
                </NavLink>
            </li>}
            {auth.isLoggedIn && <li className="MenuItem">
                <NavLink to="/u1/profile">
                    Profile
                </NavLink>
            </li>}
        </React.Fragment>

    )
}

export default NavLinks;