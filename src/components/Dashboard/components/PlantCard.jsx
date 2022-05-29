import React, { useState, useEffect } from 'react'
import { Box, Card } from '@mui/material';
import styled from 'styled-components'
import Progress from './Progress'
import { useMoralis } from 'react-moralis';

const AboutContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const Image = styled.img`
  width:110px;
  height:85px;
  position:relative;
  margin-bottom:5px;
  background-color:#bbe6b8;
  padding:45px 60px;
  border-radius:15px 15px 0px 0px;

  @media screen and (max-width: 1200px) {
        width:40px;
        height:40px;
    }
`;
const Title = styled.h1`
  width:100%;
  font-size:20px;
  color:black;
  text-align:left;
  margin-left:20px;
  margin-right:5px;
`;

const Desc = styled.p`
  width:80%;
  font-size:12px;
  margin-top:10px;
  text-align:left;
  color:black;
  margin-bottom:5px;
  margin-left:0px;
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

const PlantCard = ({image, title, tokenvalue, tokenAddress, tokenId}) => {
  const [level,setLevel] = useState(0);
  const [value,setValue] = useState(0);
  const [stagetitle, setStagetitle] = useState("No plants grown");
  const [tokenValue, setTokenValue] = useState("");
  const [button, setButton] = useState(null);
  const {user, Moralis} = useMoralis();


  const createSellOrder = async () => {
    const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);
    const startAmount = 0.001; //price that will be listed on opensea
    const endAmount = 0.001; //start == endprice

    await Moralis.Plugins.opensea.createSellOrder({
      network: "testnet",
      tokenAddress: tokenAddress, 
      tokenId: tokenId,
      tokenType: "ERC1155",
      userAddress: user.attributes.ethAddress, // ** NEED TO CHANGE TO YOUR OWN ADDRESS AND THAT U MUST OWN SOME AMT OF KALE **
      startAmount,
      endAmount,
      // expirationTime: startAmount > endAmount && expirationTime, // Only set if you startAmount > endAmount
    });

    console.log("Create Sell Order Successful");
  };


  useEffect(() => {
    Moralis.enableWeb3();
    const interval = setInterval(() => {
        setValue (oldValue => {
            const newValue = oldValue + 10;
                return newValue;
            });
        },2000);
    },[Moralis]);

    useEffect(() => {
        if (value >= 100) {
            setLevel(level+1);
            setValue(0);
        }
    },[value, level]);

    useEffect(() => {
      switch(level) {
          case 0:
              setStagetitle("Seed Planted");
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
              setButton( <Button  onClick={createSellOrder} >Sell</Button>);
      }
  }, [level,tokenValue, tokenvalue,createSellOrder]);
  return (
    <Card sx={{ borderRadius:4 }}>
        <Box sx={{ position: 'relative'}}>
          <Image alt={'dd'} src={image} ratio="1/1" />
        </Box>

       <AboutContainer>
            <Title>{title}</Title>
            <Desc>{stagetitle} </Desc>
            </AboutContainer>
            <Progress color={"darkblue"} width={"190px"} value={value} max={100}/>
            <AboutContainer>
            <ValueDesc>{ tokenValue }</ValueDesc>
            {button}
        </AboutContainer>
    </Card>
  )
}
export default PlantCard