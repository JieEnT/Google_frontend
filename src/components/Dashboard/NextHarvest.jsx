import React from 'react'
import styled from 'styled-components'
import Harvest from './carrot.png'

const Container = styled.div`
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
    margin-left:30px;
`;
const Title = styled.h1`
  margin-top:10px;
  font-size:15px;
  color:darkgrey;
  text-align:left;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;

const Desc = styled.p`
  width:90%;
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;

const Image = styled.img`
  width:25%;
  height:70px;
  position:relative;
  margin-top:20px;
  margin-bottom:50px;
  margin-left:20px;

  @media screen and (max-width: 1200px) {
        margin-left:5px;
    }
`;

const NextHarvest = () => {
  return (
    <Container>
        <Image src= {Harvest}></Image>
      <AboutContainer>
      <Title>Estimated time to next harvest</Title>
      <Desc> (Insert time here)</Desc>
      </AboutContainer>
    </Container>
  )
}
export default NextHarvest
