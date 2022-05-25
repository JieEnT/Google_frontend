import { useEffect, useState } from "react";
import { Container, Grid, Paper, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useMoralis } from 'react-moralis';


//idk if yall want to use this but can try uh if yall wan

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const NFTCard = (token)  => {

    console.log(NFTData);
    const { Moralis } = useMoralis();
  
    //get specific nft detail
//     const getAsset = async () => {
//         NFTdata = await Moralis.Plugins.opensea.getAsset({
//         network: "testnet",
//         tokenAddress: token.token_address,
//         tokenId: token.token_id,
//      });
// };
  
  
    return (
        
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
          mb: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}
      >
        {/* <Grid container spacing={2}>
          <Grid item>
            <Img alt="complex" src={photoURL} sx={{ borderRadius: 1.5, maxWidth: 180, maxHeight: 180 }} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div">
                  {name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {address}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}
                >
                  {about}
                </Typography>
              </Grid>
              <Grid item>
                <Link href={`rentalstore/${id}`} color="blue">
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Read More
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {`$${rentalCost}/mth`}
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}
      </Paper>
    );
}
export default NFTCard;

  