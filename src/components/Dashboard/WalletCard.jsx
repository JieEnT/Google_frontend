import React, {useState} from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';
const Container = styled.div`
    padding: 20px;
    width:250px;
    height:110px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:left;
    margin-top:120px;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:center;
`;
const Title = styled.h1`
  margin-top:10px;
  font-size:15px;
  color:darkgrey;
  text-align:left;
`;

const Desc = styled.p`
  width:90%;
  font-size:15px;
  margin-top:10px;
  text-align:left;
  color:black;
`;

const Button = styled.button`
  padding:10px;
  width:160px;
  background-color:pink;
  color:white;
  border-radius:10px;
  font-weight:bold;
  border:none;
  letter-spacing:1px;
  cursor:pointer;
  position:relative;
  top:12px;
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
        {/* <Title>Account Address</Title> */}

        <Title>Current Account Balance</Title>
        <Desc> $ {userBalance}</Desc>
        <Button onClick={connectWalletHandler}>{connButtonText}</Button>
        {/* <Desc>{defaultAccount}</Desc> */}
        {errorMessage}
        </AboutContainer>
      </Container>  
    )
}
export default WalletCard