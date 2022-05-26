import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material';

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
  return (
    <Container>
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
              <NoVege/>
            </Grid>
        </Grid>
      </GridContainer>
      <Nursery/>
      <NFTs/>
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
