import React from 'react'
import styled from 'styled-components'

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
const AboutContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:100px;
`;
const Dashboard = () => {
  return (
    <Container>
    <AboutContainer>
      <Earnings/>
      <WalletCard/>
      <NextHarvest/>
      <NoVege/>
    </AboutContainer>
      <Nursery/>
      <NFTs/>
    </Container>
  );
}

export default Dashboard
