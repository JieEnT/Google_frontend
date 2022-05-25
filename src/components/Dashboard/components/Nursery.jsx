import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import EmptyNursery from '../assets/empty_nursery.jpg'
import Stage1 from '../assets/stage1.jpg'
import Stage2 from '../assets/stage2.jpg'
import FullNursery from '../assets/fullnursery.jpg'
import Progress from './Progress'
import Plants from './Plants'

const Container = styled.div`
    margin:20px 100px;
    padding: 20px;
    ${'' /* height:400px; */}
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
    margin:auto;
    ${'' /* margin-right:150px; */}
`;
const Title = styled.h1`
  font-size:30px;
  color:black;
  text-align:center;
  margin-bottom:25px;
  margin-top:5px;
`;

const Desc = styled.p`
  font-size:15px;
  color:black;
  text-align:left;
  margin:15px;
  font-weight:bold;
`;

// const Image = styled.img`
//   height:250px;
//   position:relative;
//   margin:auto;
//   ${'' /* margin:5px; */}
//   display:flex;
//   justify-content:flex-start;

//   @media screen and (max-width: 1200px) {
//     width:70%;
//     height:70%;
// }
// `;

const Nursery = () => {
    // const [level,setLevel] = useState(0);
    // const [value,setValue] = useState(0);
    // const [image, setImage] = useState(EmptyNursery);
    // const [title, setTitle] = useState("No plants grown");
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setValue (oldValue => {
    //             const newValue = oldValue + 10;

    //             // if (newValue === 100) {
    //             //     clearInterval(interval);
    //             // }
    //             return newValue;
    //         });
    //     },2000);
    // },[]);

    // useEffect(() => {
    //     if (value >= 100) {
    //         setLevel(level+1);
    //         setValue(0);
    //     }
    // },[value, level]);

    // useEffect(() => {
    //     switch(level) {
    //         case 0:
    //             setImage(EmptyNursery);
    //             setTitle("No plants grown");
    //             break;
    //         case 1:
    //             setImage(Stage1);
    //             setTitle("Seedling Stage");
    //             break;
    //         case 2:
    //             setImage(Stage2);
    //             setTitle("Young Plant Stage");
    //             break;
    //         default:
    //             setImage(FullNursery);
    //             setTitle("Fully Grown Stage");
    //     }
    // }, [level]);

  return (
    <Container>
    {/* <AboutContainer>
    <Image src= {image}></Image>
    <Title>{title}</Title>
    <Desc>To next stage of agricultural cycle</Desc>
    <Progress color={"darkblue"} width={"250px"} value={value} max={100}/>
    </AboutContainer> */}
    <AboutContainer>
    <Title>My Plants</Title>
    <Plants/>
    </AboutContainer>
    </Container>
  )
}
export default Nursery
