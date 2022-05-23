import React, { useState } from 'react';

import styled from 'styled-components'
import LoginModal from './LoginModal';

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

const Login = props => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const closeShowLoginModal = () => {
        setShowLoginModal(false);
    }

    const openShowLoginModal = () => {
        setShowLoginModal(true);
    }

    return(
        <React.Fragment>
            <LoginModal 
                show={showLoginModal}
                onCancel={closeShowLoginModal}
            >
            </LoginModal>
            <Button onClick={openShowLoginModal}>
                Login
            </Button>
        </React.Fragment>
    );
}

export default Login;
