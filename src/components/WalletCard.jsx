import React, {useState} from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';
const Container = styled.div`
    margin-right:50px;
    padding: 20px;
    width:400px;
    height:200px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
  margin-top:10px;
  font-size:18px;
  color:black;
  text-align:center;
`;

const Desc = styled.p`
  width:90%;
  font-size:18px;
  margin-top:10px;
  text-align:center;
  color:black;
`;

const Button = styled.button`
  padding:15px;
  background-color:pink;
  color:white;
  border-radius:10px;
  font-weight:bold;
  border:none;
  letter-spacing:2px;
  cursor:pointer;
  margin-bottom:15px;
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

    //listen for account changes
    window.ethereum.on('accountsChanged',accountChangedHandler);
    window.ethereum.on('chainChanged',chainChangedHandler);

    return (
        <Container>
        <AboutContainer>
        <Button onClick={connectWalletHandler}>{connButtonText}</Button>
        <Title>Address: {defaultAccount}</Title>
        <Desc>Balance: {userBalance}</Desc>
        {errorMessage}
        </AboutContainer>
      </Container>  
    )
}
export default WalletCard