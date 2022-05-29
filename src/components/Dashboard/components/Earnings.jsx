import React from 'react'
import styled from 'styled-components'
import { Card, Box, CardContent, CardMedia } from '@mui/material';

const Dollar = 'https://storage.googleapis.com/pomona/dollar.jpg';

const cardStyle = {
    padding: "20px",
    width:"260px",
    height:"100px",
    display:"flex",
}

const Title = styled.h1`
  font-size:17px;
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

const Earnings = ({value}) => {
  return (
    <Card style={cardStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ width: 70, marginTop:2, marginLeft:1 }}
          image={Dollar}
          alt="Live from space album cover"
        />
        
      </Box>
      <CardContent sx={{ flex: '0 1 auto', marginTop:1 }}>
          <Title>Earnings</Title>
          <Desc> {value.toFixed(3)}/ETH</Desc>
        </CardContent>
    </Card>
  )
}
export default Earnings
