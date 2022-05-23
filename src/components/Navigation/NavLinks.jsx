import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css'
import {AuthContext} from "../../context/auth-context";

const NavLinks = ({setHeaderStyle}) => {
    const auth = useContext(AuthContext);

    return(
        <React.Fragment>
            <li className="MenuItem" onClick={() => setHeaderStyle("main-header")}>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li className="MenuItem" onClick={() => setHeaderStyle("main-header-two")}>
                <NavLink to="/marketplace">
                    MarketPlace
                </NavLink>
            </li>
            {auth.isLoggedIn && <li className="MenuItem" onClick={() => setHeaderStyle("main-header")}>
                <NavLink to="/u1/dashboard">
                    Dashboard
                </NavLink>
            </li>}
            {auth.isLoggedIn && <li className="MenuItem" onClick={() => setHeaderStyle("main-header-two")}>
                <NavLink to="/u1/profile">
                    Profile
                </NavLink>
            </li>}
        </React.Fragment>

    )
}

export default NavLinks;