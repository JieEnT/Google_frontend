import React, {useContext, useState, useEffect} from 'react';

import styled from 'styled-components'
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import Login from '../Login';
import Logout from '../Logout';
import {AuthContext} from "../../context/auth-context";

import './Navbar.css';

const Menu = styled.ul`
    display:flex;
    list-style:none;
`;

const NavBar = () => {
    const auth = useContext(AuthContext);

    const [headerStyle, setHeaderStyle] = useState("main-header");

    
    const setStyleOnLoc = () => {
            switch(window.location.pathname){
                case '/':
                    setHeaderStyle("main-header");
                    break;
                case '/marketplace':
                    setHeaderStyle("main-header-two");
                    break;
                case '/u1/dashboard':
                    setHeaderStyle("main-header");
                    break;
                case '/u1/profile':
                    setHeaderStyle("main-header-two");
                    break;
                default:
                    setHeaderStyle("main-header");
            }
    }


    useEffect( setStyleOnLoc , [window.location.pathname]);

    //So that the right navigation appears on back button
    window.addEventListener('popstate', setStyleOnLoc);

    return (
        <MainHeader headerStyle={headerStyle}>
                <h1 className = "main-title">
                    Pomona
                </h1>
                <Menu>
                    {/* Navlinks renders the different tabs */}
                    <NavLinks setHeaderStyle={setHeaderStyle}/>
                </Menu>
                {!auth.isLoggedIn && <Login/>}
                {auth.isLoggedIn && <Logout/>}
        </MainHeader>
    );
};
export default NavBar