import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import styled from 'styled-components'
import Progress from './Progress'

const Container = styled.div`
    margin-right:30px;
    padding: 10px;
    ${'' /* width:140px; */}
    ${'' /* height:200px; */}
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
    @media screen and (max-width: 1200px) {
        width:120px;
        height:180px;
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
  padding:40px 45px;
  border-radius:15px;

  @media screen and (max-width: 1200px) {
        width:40px;
        height:40px;
    }
`;
const Title = styled.h1`
  font-size:15px;
  color:black;
  text-align:center;
`;

const Desc = styled.p`
  width:90%;
  font-size:12px;
  margin-top:10px;
  text-align:center;
  color:black;
  margin-bottom:5px;
`;

const PlantCard = ({image, title, tokenvalue}) => {
  const [level,setLevel] = useState(0);
  const [value,setValue] = useState(0);
  const [stagetitle, setStagetitle] = useState("No plants grown");
  const [tokenValue, setTokenValue] = useState("");
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
              setStagetitle("Seedling Stage");
              break;
          case 2:
              setStagetitle("Young Plant Stage");
              break;
          default:
              setStagetitle("Fully Grown Stage");
              setTokenValue(tokenvalue);
              setValue(100);
      }
  }, [level,tokenValue, tokenvalue]);
  return (
    <Grid item xs={12} sm={6} md={3}>
        <Container>
            <AboutContainer>
            <Image src= {image}></Image>
            <Title>{title}</Title>
            <Desc>{stagetitle} </Desc>
            <Progress color={"darkblue"} width={"150px"} value={value} max={100}/>
            <Desc>{ tokenValue }</Desc>
            </AboutContainer>
        </Container>
    </Grid>
  )
}
export default PlantCard