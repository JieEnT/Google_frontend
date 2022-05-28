/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import axios from "axios";

import {
  useMoralis,
  useMoralisWeb3Api,
  useNFTBalances,
  useNativeTransactions,
} from "react-moralis";

// Components
import Earnings from "./components/Earnings";
import WalletCard from "./components/WalletCard";
import NextHarvest from "./components/NextHarvest";
import NoVege from "./components/NoVege";
import Nursery from "./components/Nursery";
import NFTs from "./components/NFTs";

// Assets
const Background = 'https://storage.googleapis.com/pomona/dashboardbg.jpg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  background-size: cover;
  margin: auto;
  ${"" /* background-color:rgba(26, 58, 122); */}
`;

const GridContainer = styled.div`
  margin: 125px 100px 0px;
  background-color: transparent;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
`;

const Dashboard = () => {
  const [NFTBalance, setNFTBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [balance, setBalance] = useState(0);
  const { user, Moralis } = useMoralis();
  const [numVege, setNumVege] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [nextharvest, setNextharvest]= useState(null);
  const [NFTList, setNFTList] = useState({});
  
 
  const fetchNFTBalance = async () => {
    await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "/nft?chain=rinkeby&format=decimal",
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "xaqCBcCwnNaPyIinRBSDLyzTParEzY24YQLPn1nUcNRZ8INUhhbiclYAAptH5AmG",
        },
      }
    ).then( (res) => {
      setNFTBalance(res.data.result);
      setNumVege(res.data.result.length);

    });
  };

  const fetchTransactions = async () => {
    const res = await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "?chain=rinkeby",
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "xaqCBcCwnNaPyIinRBSDLyzTParEzY24YQLPn1nUcNRZ8INUhhbiclYAAptH5AmG",
        },
      }
    );
    setTransactions(res.data);
    var finalvalue = 0;
    for (let i = 0; i < res.data.result.length;i++) {
      finalvalue += res.data.result[0].gas;
      if (i===0) {
        const dateString = res.data.result[i].block_timestamp;
        setNextharvest(formatDate(dateString));
        // setNextharvest(res.data.result[0].block_timestamp);
      }
    };
    finalvalue = finalvalue/1000000000000000000000000;
    setEarnings(finalvalue);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    var date = new Date(dateString);
    date.setDate(date.getDate() + 30);
    return date.toLocaleDateString(undefined, options)
  }
  // console.log(formatDate(dateString))

  const fetchBalance = async () => {
    const res = await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "/balance?chain=rinkeby",
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "xaqCBcCwnNaPyIinRBSDLyzTParEzY24YQLPn1nUcNRZ8INUhhbiclYAAptH5AmG",
        },
      }
    );
    setBalance(res.data);
  };

  const fetchNFTData = async () => {
    const NFTdata = await Moralis.Plugins.opensea.getAsset({
      network: "testnet",
      tokenAddress: "0xBc4595D6d8Cc28C3f611f3B9d778270935e9C8a1",
      tokenId: "1",
    });

    setNFTList({...NFTList, ...NFTdata});

    // console.log(NFTdata);
  };

  useEffect(() => {
    Moralis.initPlugins();
    fetchNFTBalance();
    fetchTransactions();
    fetchBalance();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // console.log(NFTList);


  // console.log(transactions);

  // console.log(balance);
  // console.log(nextharvest);
  return ( 
    <Container>
      <GridContainer>
        <Grid container rowSpacing={1} columnSpacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Earnings value={earnings} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <WalletCard value={balance.balance}/>
             {/* { balance != null && <WalletCard value={balance.balance/100}/>} */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NextHarvest value={nextharvest}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NoVege value={numVege}/>
           {/* { NFTbalance != null && <NoVege value={NFTBalance.result.length} />} */}
          </Grid>
        </Grid>
      </GridContainer>
      <Nursery value={NFTBalance}/>
      
    </Container>
  
  );
};

{
  /* <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Paper>xs=6 md=8</Paper>
  </Grid>
  <Grid item xs={6} md={4}>
    <Paper>xs=6 md=4</Paper>
  </Grid>
  <Grid item xs={6} md={4}>
    <Paper>xs=6 md=4</Paper>
  </Grid>
  <Grid item xs={6} md={8}>
    <Paper>xs=6 md=8</Paper>
  </Grid>
</Grid> */
}

export default Dashboard;
