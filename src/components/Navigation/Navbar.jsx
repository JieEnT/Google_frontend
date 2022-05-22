import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import Login from '../Login';

import './Navbar.css';

const Logo = styled.h1 `

    ${'' /* text-decoration: underline crimson; */}
`;

const Menu = styled.ul`
    display:flex;
    list-style:none;
`;
const MenuItem = styled.li`
    margin-right:30px;
    font-size:20px;
    font-weight:bold;
    color:white;
    cursor:pointer;
`;

const NavBar = () => {
    return (
    <MainHeader>
            <h1 className="main-navigation__title">
                <Link to="/">Pomona</Link>
            </h1>
            <Menu>
                {/* Navlinks renders the different tabs */}
                <NavLinks/>
            </Menu>
            <Login/>
    </MainHeader>
    );
};
export default NavBar