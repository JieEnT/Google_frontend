import React, {useContext, useState} from 'react'
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

    return (
        <MainHeader headerStyle={headerStyle}>
                <h1 className = "main-navigation__title">
                    <Link to="/">Pomona</Link>
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