import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

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

    useEffect(() => {
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
    }, [window.location.pathname]);

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