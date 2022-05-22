import React from 'react'
import styled from 'styled-components'
import Earnings from './Earnings'
import WalletCard from './WalletCard'
import NextHarvest from './NextHarvest'
import NoVege from './NoVege'

const Container = styled.div`
    height:100vh;
    display:flex;
    justify-content:space-between;
    background-color:darkred;
`;
const Dashboard = () => {
  return (
    <Container>
        <Earnings/>
      <WalletCard/>
      <NextHarvest/>
      <NoVege/>
    </Container>
  );
}

export default Dashboard
