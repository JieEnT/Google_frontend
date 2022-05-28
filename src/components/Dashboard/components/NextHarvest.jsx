import React from 'react'
import styled from 'styled-components'
import { Card, Box, CardContent, CardMedia } from '@mui/material';
import Harvest from '../assets/carrot.png'

// const Container = styled.div`
//     padding: 20px;
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
const NextHarvest = ({value}) => {
  return (
    <Card style={cardStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ width: 85 }}
          image={Harvest}
          alt="Live from space album cover"
        />
        
      </Box>
      <CardContent sx={{ flex: '0 1 auto' }}>
          <Title>Estimated time to next harvest</Title>
          <Desc>{value}</Desc>
      </CardContent>
    </Card>
    // <Container>
    //     <Image src= {Harvest}></Image>
    //   <AboutContainer>
    //   <Title>Estimated time to next harvest</Title>
    //   <Desc> (Insert time here)</Desc>
    //   </AboutContainer>
    // </Container>
  )
}
export default NextHarvest
