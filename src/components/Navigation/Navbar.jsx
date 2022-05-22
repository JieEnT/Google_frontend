import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';

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
const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color:white;
    color:darkblue;
    font-weight:bold;
    border-radius:10px;
    cursor:pointer;
    margin-right:60px;
`;

const NavBar = () => {
    return (
    <MainHeader>
            <h1 className="main-navigation__title">
                <Link to="/marketplace">Pomona</Link>
            </h1>
            <Menu>
                {/* Navlinks renders the different tabs */}
                <NavLinks/>
            </Menu>
    </MainHeader>
    );
};
export default NavBar