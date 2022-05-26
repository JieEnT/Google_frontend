import React, {useState} from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';
import Account from '../assets/wallet.png';

const Container = styled.div`
    padding:20px;
    width:260px;
    height:100px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:left;

    @media screen and (max-width: 1200px) {
        width:200px;
        height:100px;
    }
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
    margin-left:30px;
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
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;

  @media screen and (max-width: 1200px) {
        font-size:13px;
    }
`;
const Image = styled.img`
  width:25%;
  height:70px;
  position:relative;
  margin-top:20px;
  margin-bottom:50px;
  margin-left:20px;

  @media screen and (max-width: 1200px) {
        margin-left:5px;
    }
`;

const Button = styled.button`
  padding:7px;
  width:120px;
  background-color:rgba(26, 58, 122);
  color:white;
  border-radius:15px;
  font-weight:bold;
  border:none;
  cursor:pointer;
  position:relative;
  top:12px;

  @media screen and (max-width: 1200px) {
        width:110px;
        font-size:12px;
    }
`;

const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    
    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangedHandler(result[0]);
                setConnButtonText('Wallet Connected');
                getAccountBalance(result[0]);
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    //update account
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    

    const getAccountBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    };

    const chainChangedHandler = () => {
        window.location.reload();
    }

    
    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    // //listen for account changes
    // window.ethereum.on('accountsChanged',accountChangedHandler);
    // window.ethereum.on('chainChanged',chainChangedHandler);

    return (
        <Container>
        <Image src= {Account}></Image>
        <AboutContainer>
        {/* <Title>Account Address</Title> */}

        <Title>Current Account Balance</Title>
        <Desc> $ {userBalance}</Desc>
        {!isMetaMaskInstalled() && <Desc> download metamask! </Desc>}
        { isMetaMaskInstalled() && <Button onClick={connectWalletHandler}>{connButtonText}</Button> }
        {/* <Desc>{defaultAccount}</Desc> */}
        {errorMessage}
        </AboutContainer>
      </Container>  
    )
}
export default WalletCard