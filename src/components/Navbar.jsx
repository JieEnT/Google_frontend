import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:50px;
    z-index:10;
`;

const Wrapper = styled.div`
    padding:20px 20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

const Left = styled.div `
    width:60%;
    display:flex;
    align-items:center; 
    justify-content:space-between;
`;

const Logo = styled.h1 `
    font-weight:bold;
    color:white;
    margin-left:20px;
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
    <Container>
        <Wrapper>
        <Left>
         <Logo>Pomona</Logo>
         <Menu>
             <MenuItem>Home</MenuItem>
             <MenuItem>Marketplace</MenuItem>
             <MenuItem>Dashboard</MenuItem>
             <MenuItem>Profile</MenuItem>
         </Menu>
        </Left>
        <Button>Log in</Button>
        </Wrapper>
    </Container>
    );
};
export default NavBar