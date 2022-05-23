import React from 'react'
import styled from 'styled-components'
import Earnings from './Earnings'
import WalletCard from './WalletCard'
import NextHarvest from './NextHarvest'
import NoVege from './NoVege'
import Nursery from './Nursery'
import Background from './dashboardbg.jpg';

const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    background-image: url(${Background});
    background-size:cover;
    overflow:hidden;
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
    </Container>
  );
}

export default Dashboard
