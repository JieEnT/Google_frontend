import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import styled from 'styled-components'
import Progress from './Progress'

const Container = styled.div`
    padding: 0px 0px;
    width:180px;
    ${'' /* height:200px; */}
    ${'' /* -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black; */}
    border:1px solid #eee;
    background-color:white;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    &:hover{
                transform:scale(1.1);
                transition: all 2s ease;
            }
    @media screen and (max-width: 1200px) {
        width:120px;
        height:180px;
    }
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const Image = styled.img`
  width:70px;
  height:60px;
  position:relative;
  margin-bottom:10px;
  background-color:#bbe6b8;
  padding:40px 55px;
  border-radius:15px 15px 0px 0px;

  @media screen and (max-width: 1200px) {
        width:40px;
        height:40px;
    }
`;
const Title = styled.h1`
  width:100%;
  font-size:16px;
  color:black;
  text-align:left;
  margin-left:10px;
  margin-right:5px;
`;

const Desc = styled.p`
  width:80%;
  font-size:12px;
  margin-top:10px;
  text-align:left;
  color:black;
  margin-bottom:5px;
  margin-left:5px;
`;

const ValueDesc = styled.p`
  width:100%;
  font-size:16px;
  font-weight:bold;
  margin-top:3px;
  text-align:left;
  color:darkgrey;
  margin-bottom:10px;
  margin-left:30px;
`;

const Button = styled.button`
  padding:4px;
  width:120px;
  background-color:darkgreen;
  color:white;
  border-radius:5px;
  font-weight:bold;
  border:none;
  cursor:pointer;
  position:relative;
  right:30px;
  bottom:3px;

  @media screen and (max-width: 1200px) {
        width:110px;
        font-size:12px;
    }
`;

const PlantCard = ({image, title, tokenvalue}) => {
  const [level,setLevel] = useState(0);
  const [value,setValue] = useState(0);
  const [stagetitle, setStagetitle] = useState("No plants grown");
  const [tokenValue, setTokenValue] = useState("");
  const [button, setButton] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
        setValue (oldValue => {
            const newValue = oldValue + 10;

            // if (newValue === 100) {
            //     clearInterval(interval);
            // }
            // if (level === 3) {
            //   clearInterval(interval);
            // }
                return newValue;
            });
        },2000);
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
              setStagetitle("No plants grown");
              break;
          case 1:
              setStagetitle("Seedling");
              break;
          case 2:
              setStagetitle("Young Plant");
              break;
          default:
              setStagetitle("Fully Grown");
              setTokenValue(tokenvalue);
              setValue(100);
              setButton( <Button>Sell</Button>);
      }
  }, [level,tokenValue, tokenvalue]);
  return (
    <Grid item xs={12} sm={6} md={3} mb={3}>
        <Container>
            <Image src= {image}></Image>
            <AboutContainer>
            <Title>{title}</Title>
            <Desc>{stagetitle} </Desc>
            </AboutContainer>
            <Progress color={"darkblue"} width={"160px"} value={value} max={100}/>
            <AboutContainer>
            <ValueDesc>{ tokenValue }</ValueDesc>
            {button}
            </AboutContainer>
        </Container>
    </Grid>
  )
}
export default PlantCard