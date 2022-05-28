import React, {useState} from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';
import { Card, Box, CardContent, CardMedia } from '@mui/material';
import Account from '../assets/wallet.png';

// const Container = styled.div`
//     padding:20px;
//     margin: 0px 20px;
//     width:260px;
//     height:100px;
//     -webkit-box-shadow: 0px 0px 17px -11px black;
//     box-shadow: 0px 0px 15px -8px black;
//     background-color:white;
//     border-radius:10px;
//     display:flex;
//     align-items:left;
// `;

const cardStyle = {
    padding: "20px",
    width:"260px",
    height:"100px",
    display:"flex",
}

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
`;

const Title = styled.h1`
  font-size:15px;
  color:darkgrey;
  text-align:left;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;

const Desc = styled.p`
  width:100%;
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;
const Image = styled.img`
  width:40%;
  height:100px;
  position:relative;
  margin-top:5px;
  margin-bottom:50px;
`;

const WalletCard = (props) => {
    // const [errorMessage, setErrorMessage] = useState(null);
    // const [defaultAccount, setDefaultAccount] = useState(null);
    // const [userBalance, setUserBalance] = useState(null);
    // const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    
    // const connectWalletHandler = () => {
    //     if (window.ethereum) {
    //         window.ethereum.request({method: 'eth_requestAccounts'})
    //         .then(result => {
    //             accountChangedHandler(result[0]);
    //             setConnButtonText('Wallet Connected');
    //             getAccountBalance(result[0]);
    //         })
    //         .catch(error => {
    //             setErrorMessage(error.message);
    //         })
    //     } else {
    //         console.log('Need to install MetaMask');
    //         setErrorMessage('Please install MetaMask browser extension to interact');
    //     }
    // }

    // //update account
    // const accountChangedHandler = (newAccount) => {
    //     setDefaultAccount(newAccount);
    //     getAccountBalance(newAccount.toString());
    // }

    

    // const getAccountBalance = (account) => {
    //     window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
    //     .then(balance => {
    //         setUserBalance(ethers.utils.formatEther(balance));
    //     })
    //     .catch(error => {
    //         setErrorMessage(error.message);
    //     })
    // };

    // const chainChangedHandler = () => {
    //     window.location.reload();
    // }

    
    // //Created check function to see if the MetaMask extension is installed
    // const isMetaMaskInstalled = () => {
    //     //Have to check the ethereum binding on the window object to see if it's installed
    //     const { ethereum } = window;
    //     return Boolean(ethereum && ethereum.isMetaMask);
    // };

    // //listen for account changes
    // window.ethereum.on('accountsChanged',accountChangedHandler);
    // window.ethereum.on('chainChanged',chainChangedHandler);

    return (
    //     <Container>
    //     <Image src= {Account}></Image>
    //     <AboutContainer>
    //     {/* <Title>Account Address</Title> */}

    //     <Title>Current Account Balance</Title>
    //     <Desc> $ {userBalance}</Desc>
    //     {!isMetaMaskInstalled() && <Desc> download metamask! </Desc>}
    //     { isMetaMaskInstalled() && <Button onClick={connectWalletHandler}>{connButtonText}</Button> }
    //     {/* <Desc>{defaultAccount}</Desc> */}
    //     {errorMessage}
    //     </AboutContainer>
    //   </Container>  
    <Card style={cardStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ width: 65, marginTop: 2, marginLeft:2 }}
          image={Account}
          alt="Live from space album cover"
        />
        
      </Box>
      <CardContent sx={{ flex: '0 1 auto', marginTop:1}}>
          <Title>Account Balance</Title>
          <Desc>{(props.value/1000000000000000000).toFixed(3)}/ETH</Desc>
        </CardContent>
    </Card>
    )
}
export default WalletCard