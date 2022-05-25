import React, {useContext, useState, useEffect} from 'react';

import styled from 'styled-components'
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import Login from '../Registration/Login';
import Logout from '../Registration/Logout';
import {AuthContext} from "../../context/auth-context";
import { useMoralis, useMoralisWeb3ApiCall, useMoralisWeb3Api } from "react-moralis";


import './Navbar.css';

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color:white;
    color:darkblue;
    font-weight:bold;
    border-radius:10px;
    cursor:pointer;
    margin-right:10px;
    ${'' /* position:relative;
    left:180px; */}
`;

const Menu = styled.ul`
    display:flex;
    list-style:none;
`;

const NavBar = () => {
    const auth = useContext(AuthContext);
    const { authenticate, isAuthenticated, user , logout } = useMoralis();


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

    const logOutMoralis = async () => {
        await logout();
        console.log("logged out");
      }

    //To set the navbar correctly on logout
    useEffect( setStyleOnLoc );

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
                <Menu>
                {!isAuthenticated && <Button onClick={() => authenticate()}> Connect Wallet   </Button>}
                {isAuthenticated && <Button onClick={() => logOutMoralis()}> Disconnect Wallet   </Button>}
                {!auth.isLoggedIn && <Login />}
                {auth.isLoggedIn && <Logout />}
                </Menu>
        </MainHeader>
    );
};
export default NavBar