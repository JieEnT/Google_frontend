import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import './NavLinks.css'

const NavLinks = props => {
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
            <li className="MenuItem">
                <NavLink to="/u1/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li className="MenuItem">
                <NavLink to="/u1/profile">
                    Profile
                </NavLink>
            </li>
        </React.Fragment>

    )
}

export default NavLinks;