import React from 'react';
import { Box } from '@mui/material';

import PlantCard from "./PlantCard";

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

export default Plants;
