import React, { useEffect  } from "react";
import {Button } from "@mui/material";
import axios from "axios";

import {
  useMoralis,
  useMoralisWeb3Api,
  useNFTBalances,
  useNativeTransactions,

} from "react-moralis";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import NFTCard from "./NFTCard";

//CHANGE TO BACKEND SERVER AFTER DEPLOYMENT
const baseURL = "http://localhost:8080";




const Container = styled.div`
  margin: 20px 100px;
  padding: 10px;
  height: 400px;
  -webkit-box-shadow: 0px 0px 17px -11px black;
  box-shadow: 0px 0px 15px -8px black;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const NFTs = () => {
    
    const Web3Api = useMoralisWeb3Api();

    const { user, Moralis, isInitialized } = useMoralis();


    const { getNFTBalances, data: NFTbalance } = useNFTBalances();
    const { getNativeTransations, data:transList , chainId} = useNativeTransactions();



     //get specific nft detail from OPENSEA (button below, try to make it when it loads or smt i guess)
     const getAsset = async () => {
          const NFTdata = await Moralis.Plugins.opensea.getAsset({
          network: "testnet",
          tokenAddress: "0xBc4595D6d8Cc28C3f611f3B9d778270935e9C8a1",
          tokenId: "1",

        });
        console.log(NFTdata);
     };

     const createSellOrder = async () => {
      const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);
      const startAmount = 0.001; //price that will be listed on opensea
      const endAmount = 0.001; //start == endprice
  
      await Moralis.Plugins.opensea.createSellOrder({
        network: "testnet",
        tokenAddress: "0xBc4595D6d8Cc28C3f611f3B9d778270935e9C8a1", 
        tokenId: "1",
        tokenType: "ERC1155",
        userAddress: "0xc781fcD8187c42416301F00Db636745daD0BA7FB", // ** NEED TO CHANGE TO YOUR OWN ADDRESS AND THAT U MUST OWN SOME AMT OF KALE **
        startAmount,
        endAmount,
        // expirationTime: startAmount > endAmount && expirationTime, // Only set if you startAmount > endAmount
      });
  
      console.log("Create Sell Order Successful");
    };

    // initialise the data when the page loads

    useEffect (() => {
      if(isInitialized){
        Moralis.initPlugins();
        getNFTBalances({ params: { chain: "rinkeby" } });
      }
    },[]);

    const postUserDets = async () => {
        getNativeTransations({ params: { chain: "rinkeby" } });
        //IDK what you can do with the transactions but you can look at console.log and come up with something creative i think use the gas price and play with it seems to have some potential i guess
        // or can use transactions to be another set of data to post to backend idk

        console.log(transList);
        //post user data
        axios({
          method: 'post',
          url: baseURL + '/api/auth-user',
          data: {
            ethAddress: user.attributes.ethAddress,
            lifetimeEarnings: 374,
            inventory: null,
          }
        });
        //post NFT data 
        NFTbalance.result.map(token => axios({
          method: 'post',
          url: baseURL + '/' +  user.attributes.ethAddress + '/produce',
          data: {
            contractAddress: token.token_address,
            quantity: token.amount,
          }
        }) );
    };

    const postNFT = async () => {
        const NFTdata = await Moralis.Plugins.opensea.getAsset({
        network: "testnet",
        tokenAddress: "0xBc4595D6d8Cc28C3f611f3B9d778270935e9C8a1",
        tokenId: "1",

      });
      axios({
        method: 'post',
        url: baseURL + '/user',
        data: {
          ethAddress: user.attributes.ethAddress,
          lifetimeEarnings: '4.1298',
          inventory: null,
        }
      });
      // console.log(NFTdata);
    };

    

    //print out the NFTs under this account
    // console.log(NFTbalance);


  return (
    <Container>
      {/* to print out the specific NFT data FROM OPENSEA */}
      <Button onClick={getAsset}>Get Asset</Button>
      {/* CLICK TO SELL KALE HARDCODED KALE ADDRESS & USER ACCT TOKEN  INSIDE FUNCTION */}
      <Button onClick={createSellOrder}>Create Sell Order</Button>
      {/* CLICK TO SELL KALE HARDCODED KALE ADDRESS & USER ACCT TOKEN  INSIDE FUNCTION */}
      <Button onClick={postUserDets}>Post User Dets</Button>
      {/* CLICK TO SELL KALE HARDCODED KALE ADDRESS & USER ACCT TOKEN  INSIDE FUNCTION */}
      <Button onClick={postNFT}>Post KALE NFT dets</Button>


      {/* { NFTbalance != null  && NFTbalance.result.map((token) => NFTCard( Moralis.Plugins.opensea.getAsset({
          network: "testnet",
          tokenAddress: token.token_address,
          tokenId: token.token_id,
        }) , token))} */}

    </Container>
  );
};
export default NFTs;
