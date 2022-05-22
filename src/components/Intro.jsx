import React from 'react'
import styled from 'styled-components'
import Background from '../assets/parallax-bg.gif';
import NavBar from './Navigation/Navbar';
import About from './About'

const WrapperContainer = styled.div`
  height:100vh;
  overflow:hidden;
  background-image: url(${Background});
  background-size:cover;
`;

const Container = styled.div`
    height: 85vh;
    display:flex;
    padding:100px;
`;

const Landing = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
  width:70%;
  font-size:50px;
  color:white;
  text-align:center;
`;

const Desc = styled.p`
  width:60%;
  font-size:20px;
  margin-top:20px;
  text-align:center;
  color:white;
`;

// const Info = styled.div`
//   display:flex;
//   margin-top:50px;
// `;

// const Button = styled.button`
//   padding:15px;
//   background-color:red;
//   color:white;
//   border-radius:10px;
//   font-weight:bold;
//   border:none;
//   letter-spacing:2px;
//   cursor:pointer;
// `;

const Intro = () => {
  return(
    <React.Fragment>
      <WrapperContainer>
        <Container>
          
          <Landing>
          <Title>Pomona is a gamified decentralised finance agricultural platform </Title>
          <Desc>We promote Singapore's "30-by-30" sustainability initiative through short-term investments in local vertical farming produce.</Desc>
          </Landing>
        </Container>
      </WrapperContainer>
      <WrapperContainer>
        <About/>
      </WrapperContainer>
    </React.Fragment>

  ) 
};

export default Intro; 
