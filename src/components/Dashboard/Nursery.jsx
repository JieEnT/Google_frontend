import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import EmptyNursery from './empty_nursery.jpg'
import Progress from './Progress'

const Container = styled.div`
    margin:15px 100px;
    padding: 20px;
    height:400px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:left;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:left;
    margin-right:150px;
`;
const Title = styled.h1`
  font-size:50px;
  color:black;
  text-align:center;
  margin:15px;
`;

const Desc = styled.p`
  font-size:15px;
  color:black;
  text-align:left;
  margin:15px;
  font-weight:bold;
`;

const Image = styled.img`
  height:300px;
  position:relative;
  margin:5px;
`;

const Nursery = () => {
    const [value,setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue (oldValue => {
                const newValue = oldValue + 5;

                if (newValue === 100) {
                    clearInterval(interval);
                }
                return newValue;
            });
        },10000);
    },[]);

  return (
    <Container>
    <AboutContainer>
    <Image src= {EmptyNursery}></Image>
    <Desc>To next stage of agricultural cycle</Desc>
    <Progress color={"darkblue"} width={"300px"}value={value} max={100}/>
    </AboutContainer>
    <AboutContainer>
    <Title>My Plants</Title>
    </AboutContainer>
    </Container>
  )
}
export default Nursery
