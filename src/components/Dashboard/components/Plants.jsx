import React from 'react';
import styled from 'styled-components';
import { Grid, Box } from '@mui/material';

import PlantCard from "./PlantCard";

const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Plants = (props) => {
      const NFTbalance = props.value;
      return(

         <Box
          sx={{
            display: 'grid',
            gap: 5,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
            {NFTbalance.map((vege) => (
              // <PlantCard image = {Kale} title = {vege.name} tokenvalue={vege.tokenvalue}></PlantCard>
              <div>
                {(() => {
                  switch (vege.token_id) {
                    case "8":
                      return (
                        <PlantCard
                          image={'https://storage.googleapis.com/pomona/dveg_kale-removebg.png'}
                          title="Kale"
                          tokenvalue="0.002/ETH"
                          tokenAddress={vege.token_address}
                          tokenId={vege.token_id}

                        ></PlantCard>
                      );
                    case "10":
                      return (
                        <PlantCard
                          image={'https://storage.googleapis.com/pomona/dveg_cucumber-removebg.png'}
                          title="Cucumber"
                          tokenvalue="0.002/ETH"
                          tokenAddress={vege.token_address}
                          tokenId={vege.token_id}
                        ></PlantCard>
                      );
                    case "9":
                      return (
                        <PlantCard
                          image={'https://storage.googleapis.com/pomona/dveg_tomato-removebg.png'}
                          title="Tomato"
                          tokenvalue="0.002/ETH"
                          tokenAddress={vege.token_address}
                          tokenId={vege.token_id}
                        ></PlantCard>
                      );
                    default:
                      return;
                  }
                })()}
              </div>
            ))}
        </Box>
      );
      }
  // const fetchNFTData = async () => {
  //   const NFTdata = await Moralis.Plugins.opensea.getAsset({
  //     network: "testnet",
  //     tokenAddress: "0xBc4595D6d8Cc28C3f611f3B9d778270935e9C8a1",
  //     tokenId: "1",
  //   });
  //   console.log(NFTdata);
  // };
export default Plants;
