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
import Background from "./assets/dashboardbg.jpg";

const Container = styled.div`
  height: 100%;
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
  
 
  const fetchNFTBalance = async () => {
    await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "/nft?chain=rinkeby&format=decimal&limit=1",
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "xaqCBcCwnNaPyIinRBSDLyzTParEzY24YQLPn1nUcNRZ8INUhhbiclYAAptH5AmG",
        },
      }
    ).then( (res) => {
      setNumVege(res.data.result.length);
      setNFTBalance(res.data);
    });
  };

  const fetchTransactions = async () => {
    const res = await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "?chain=rinkeby&limit=1",
      {
        headers: {
          accept: "application/json",
          "X-API-Key":
            "xaqCBcCwnNaPyIinRBSDLyzTParEzY24YQLPn1nUcNRZ8INUhhbiclYAAptH5AmG",
        },
      }
    );
    setTransactions(res.data);
  };

  const fetchBalance = async () => {
    const res = await axios.get(
      "https://deep-index.moralis.io/api/v2/" +
        `${user.attributes.ethAddress}` +
        "/balance?chain=rinkeby&limit=1",
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
    console.log(NFTdata);
  };

  useEffect(() => {

    Moralis.initPlugins();
    fetchNFTBalance();
    fetchTransactions();
    fetchBalance();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log(NFTBalance);

  console.log(transactions);

  console.log(balance);

  return ( 
    <Container>
      <GridContainer>
        <Grid container rowSpacing={1} columnSpacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Earnings />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <WalletCard value={balance.balance}/>
             {/* { balance != null && <WalletCard value={balance.balance/100}/>} */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NextHarvest />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NoVege value={numVege}/>
           {/* { NFTbalance != null && <NoVege value={NFTBalance.result.length} />} */}
          </Grid>
        </Grid>
      </GridContainer>
      <Nursery />

      {/* < Button onClick={getNFTBal} > Get Bal </Button> */}
      {/* < Button onClick={fetchReq} > Get Bal </Button> */}

      {/* <NFTs/> */}
      
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
