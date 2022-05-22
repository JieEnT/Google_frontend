import React from 'react'
import styled from 'styled-components'
import EmptyNursery from './empty_nursery.jpg'
const Container = styled.div`
    margin:25px 100px;
    padding: 20px;
    height:400px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
// const Title = styled.h1`
//   font-size:15px;
//   color:darkgrey;
//   text-align:left;
// `;

const Image = styled.img`
  height:300px;
  position:relative;
  margin:5px 50px;
`;

const Nursery = () => {
  return (
    <Container>
    <AboutContainer>
    <Image src= {EmptyNursery}></Image>

    </AboutContainer>
    </Container>
  )
}
export default Nursery
