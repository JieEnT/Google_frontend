import React from 'react'
import styled from 'styled-components'
import Dollar from '../assets/dollar.jpg'
const Container = styled.div`
    margin-left:100px;
    padding: 20px;
    width:260px;
    height:100px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:left;

    @media screen and (max-width: 1200px) {
        width:200px;
        height:100px;
    }
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
`;
const Title = styled.h1`
  font-size:15px;
  color:darkgrey;
  text-align:left;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;

const Desc = styled.p`
  width:100%;
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;
const Image = styled.img`
  width:40%;
  height:100px;
  position:relative;
  margin-top:5px;
  margin-bottom:50px;
`;
const Earnings = () => {
  return (
    <Container>
      <Image src= {Dollar}></Image>
      <AboutContainer>
      <Title>Earnings</Title>
      <Desc> $ (insert earnings)</Desc>
      </AboutContainer>
    </Container>
  )
}
export default Earnings
