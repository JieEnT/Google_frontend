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
                <NavLink to="/">
                    MarketPlace
                </NavLink>
            </li>
            <li className="MenuItem">
                <NavLink to="/">
                    Dashboard
                </NavLink>
            </li>
            <li className="MenuItem">
                <NavLink to="/">
                    Profile
                </NavLink>
            </li>
        </React.Fragment>

    )
}

export default NavLinks;