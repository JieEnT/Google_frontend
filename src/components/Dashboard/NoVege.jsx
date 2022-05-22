import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    margin-right:50px;
    padding: 20px;
    width:250px;
    height:110px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:left;
    margin-top:120px;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
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

const NoVege = () => {
  return (
    <Container>
      <AboutContainer>
      <Title>Number of vegetables invested</Title>
      <Desc> (number of vegetables here)</Desc>
      </AboutContainer>
    </Container>
  )
}
export default NoVege