import React from 'react'
import styled from 'styled-components'
import WalletCard from './WalletCard'

const Container = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:darkred;
`;
const Dashboard = () => {
  return (
    <Container>
      <WalletCard/>
    </Container>
  );
}

export default Dashboard
