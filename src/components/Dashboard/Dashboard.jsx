import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid, Button } from '@mui/material';

import {
  useMoralis,
  useMoralisWeb3Api,
  useNFTBalances,
  useNativeTransactions,

} from "react-moralis";

// Components
import Earnings from './components/Earnings'
import WalletCard from './components/WalletCard'
import NextHarvest from './components/NextHarvest'
import NoVege from './components/NoVege'
import Nursery from './components/Nursery'
import NFTs from './components/NFTs';

// Assets
import Background from './assets/dashboardbg.jpg';

const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    background-image: url(${Background});
    background-size:cover;
    margin:auto;
    ${'' /* background-color:rgba(26, 58, 122); */}
`;

const GridContainer = styled.div`
    margin:125px 100px 0px ;
    background-color:transparent;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:100px;
`;

const Dashboard = () => {

  const { user, Moralis, isInitialized } = useMoralis();

  const { getNFTBalances, data: NFTbalance } = useNFTBalances();
  const { getNativeTransations, data:transList , chainId} = useNativeTransactions();
  var numVege = 0;

  const getNFTBal = async () => {
    await getNFTBalances({ params: { chain: "rinkeby" } });
    if(NFTbalance != null) numVege = NFTbalance.result.length;
    console.log(numVege);
  };

  useEffect (() => {
    if(isInitialized){
      Moralis.initPlugins();
      Moralis.enableWeb3();
    }
    getNFTBal();
  },[Moralis, isInitialized] );


  return (
    <Container>
      {getNFTBal}
      <GridContainer>
        <Grid container rowSpacing={1} columnSpacing={4}>
            <Grid item xs={12} sm={6} md={3} >
              <Earnings/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <WalletCard/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NextHarvest/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NoVege value={numVege} />
            </Grid>
        </Grid>
      </GridContainer>
      <Nursery/>

      < Button onClick={getNFTBal} > Get Bal </Button>
      {/* <NFTs/> */}
    </Container>
  );
}

{/* <Grid container spacing={2}>
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
</Grid> */}

export default Dashboard
