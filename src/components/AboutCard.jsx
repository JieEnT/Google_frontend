import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right:50px;
    padding: 20px;
    width:300px;
    height:400px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Image = styled.img`
  width:75%;
  height:160px;
  position:relative;
  top:20px;
  margin-bottom:50px;
`;
const Title = styled.h1`
  font-size:30px;
  color:black;
  text-align:center;
`;

const Desc = styled.p`
  width:90%;
  font-size:18px;
  margin-top:10px;
  text-align:center;
  color:black;
`;

const AboutCard = ({image, title, desc}) => {
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
export default AboutCard
