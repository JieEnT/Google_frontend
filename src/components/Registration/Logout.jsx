import React, { useContext } from 'react';

import styled from 'styled-components'
import { AuthContext } from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
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

    const nav = useNavigate();

    const logOutOfAccount = () => {
        auth.logout();
        nav("/");
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
