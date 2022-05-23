import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import EmptyNursery from './empty_nursery.jpg'
import Stage1 from './stage1.jpg'
import Stage2 from './stage2.jpg'
import FullNursery from './fullnursery.jpg'
import Progress from './Progress'
import Plants from './Plants'

const Container = styled.div`
    margin:20px 100px;
    padding: 10px;
    height:400px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-right:150px;
`;
const Title = styled.h1`
  font-size:30px;
  color:black;
  text-align:left;
  margin-bottom:50px;
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
  margin:auto;
  ${'' /* margin:5px; */}
  display:flex;
  justify-content:flex-start;
`;

const Nursery = () => {
    const [level,setLevel] = useState(0);
    const [value,setValue] = useState(0);
    const [image, setImage] = useState(EmptyNursery);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue (oldValue => {
                const newValue = oldValue + 5;

                // if (newValue === 100) {
                //     clearInterval(interval);
                // }
                return newValue;
            });
        },10000);
    },[]);

    useEffect(() => {
        if (value >= 100) {
            setLevel(level+1);
            setValue(0);
        }
    },[value, level]);

    useEffect(() => {
        switch(level) {
            case 0:
                setImage(EmptyNursery);
                break;
            case 1:
                setImage(Stage1);
                break;
            case 2:
                setImage(Stage2);
                break;
            default:
                setImage(FullNursery);
        }
    }, [level]);

  return (
    <Container>
    <AboutContainer>
    <Image src= {image}></Image>
    <Desc>To next stage of agricultural cycle</Desc>
    <Progress color={"darkblue"} width={"250px"} value={value} max={100}/>
    </AboutContainer>
    <AboutContainer>
    <Title>My Plants</Title>
    <Plants/>
    </AboutContainer>
    </Container>
  )
}
export default Nursery
