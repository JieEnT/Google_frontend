import React from 'react'
import styled from 'styled-components'
import Vege from './organic-food.png';

const Container = styled.div`
    margin-right:100px;
    padding: 20px;
    width:260px;
    height:100px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:left;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    margin-left:30px;
`;
const Title = styled.h1`
  margin-top:10px;
  font-size:15px;
  color:darkgrey;
  text-align:left;
`;

const Desc = styled.p`
  width:90%;
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;
`;

const Image = styled.img`
  width:25%;
  height:70px;
  position:relative;
  margin-top:20px;
  margin-bottom:50px;
  margin-left:20px;
`;

const NoVege = () => {
  return (
    <Container>
         <Image src= {Vege}></Image>
      <AboutContainer>
      <Title>Number of vegetables invested</Title>
      <Desc> (number here)</Desc>
      </AboutContainer>
    </Container>
  )
}
export default NoVege