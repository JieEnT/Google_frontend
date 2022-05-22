import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import EmptyNursery from './empty_nursery.jpg'
import Progress from './Progress'

const Container = styled.div`
    margin:25px 100px;
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
`;
const Title = styled.h1`
  font-size:15px;
  color:black;
  text-align:left;
  margin:15px;
`;

const Image = styled.img`
  height:300px;
  position:relative;
  margin:15px 50px;
`;

const Nursery = () => {
    const [value,setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue (oldValue => {
                const newValue = oldValue + 10;

                if (newValue === 100) {
                    clearInterval(interval);
                }
                return newValue;
            });
        },1000);
    },[]);

  return (
    <Container>
    <AboutContainer>
    <Image src= {EmptyNursery}></Image>
    </AboutContainer>
    <AboutContainer>
    <Title>To next stage of agricultural cycle</Title>
    <Progress color={"darkblue"} width={"300px"}value={value} max={100}/>
    <Title>Vegetables in garden: Kale</Title>
    </AboutContainer>
    </Container>
  )
}
export default Nursery
