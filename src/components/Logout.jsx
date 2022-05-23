import React, { useState, useContext } from 'react';

import styled from 'styled-components'
import Modal from './Modal';
import { AuthContext } from '../context/auth-context';

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

const Logout = props => {
    const auth = useContext(AuthContext);

    const logOutOfAccount = () => {
        auth.logout();
    }

    return(
        <React.Fragment>
            <Button onClick={logOutOfAccount}>
                Logout
            </Button>
        </React.Fragment>
    );
}

export default Logout;
