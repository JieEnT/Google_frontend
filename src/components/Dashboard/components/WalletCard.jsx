import styled from 'styled-components';
import { Card, Box, CardContent, CardMedia } from '@mui/material';

const Account = 'https://storage.googleapis.com/pomona/wallet.png';

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
const WalletCard = (props) => {
    return (
    <Card style={cardStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ width: 65, marginTop: 2, marginLeft:2 }}
          image={Account}
          alt="Account Balance"
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