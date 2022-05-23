import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right:50px;
    padding: 20px;
    width:140px;
    height:200px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    &:hover{
                transform:scale(1.1);
                transition: all 2s ease;
            }
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Image = styled.img`
  width:60px;
  height:60px;
  position:relative;
  top:0px;
  margin-bottom:10px;
  background-color:#eeee;
  padding:45px 40px;
  border-radius:15px;
`;
const Title = styled.h1`
  font-size:15px;
  color:black;
  text-align:center;
`;

const Desc = styled.p`
  width:90%;
  font-size:12px;
  margin-top:5px;
  text-align:center;
  color:black;
`;

const PlantCard = ({image, title, desc}) => {
  return (
    <Container>
      <AboutContainer>
      <Image src= {image}></Image>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      </AboutContainer>
    </Container>
  )
}
export default PlantCard