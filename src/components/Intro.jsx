import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 90px);
    display:flex;
    padding:20px;
    background-color:pink;
`;

const Landing = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styled.h1`
  width:60%;
  font-size:50px;
  color:white;
  text-align:center;
`;

const Desc = styled.p`
  width:60%;
  font-size:20px;
  margin-top:20px;
  text-align:center;
`;

const Info = styled.div`
  display:flex;
  margin-top:50px;
`;

const Button = styled.button`
  padding:15px;
  background-color:red;
  color:white;
  border-radius:10px;
  font-weight:bold;
  border:none;
  letter-spacing:2px;
  cursor:pointer;
`;
// const Right = styled.div`
//   width:40%;
// `;

const Intro = () => {
  return <Container>
  {/* <Image src={Background}></Image> */}
    <Landing>
    <Title>SheforShe is a learning community for female entrepreneurs</Title>
    <Desc>We connect a global professional network of aspiring female entrepreneurs who are seeking knowledge and ecosystem support to start their business.</Desc>
    <Info>
      {/* <Button>BECOME A MEMBER</Button> */}
    </Info>
    </Landing>
  </Container>;
};

export default Intro; 
