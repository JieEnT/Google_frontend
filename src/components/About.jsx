import React from 'react'
import styled from 'styled-components'

import AboutCard from './AboutCard';

import DigitalToken from '../assets/digitaltoken.jpg'
import Vegetable from '../assets/farming.jpg'
import Earning from '../assets/11229.jpg'

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const About = () => {
  return (
    <Container>
      <AboutCard image= {DigitalToken} title="Invest in digital tokens" desc="Discover, buy and sell digital tokens to invest in the vegetable of your choice from the NFT marketplace."/>
      <AboutCard image = {Vegetable} title="Track the growth of your vegetables" desc="Track the growth of the vegetables you have invested in real-time through integration with IoT sensors in farms."/>
      <AboutCard image = {Earning} title="Review your investment earnings" desc="Track your earnings and keep up to update on the next harvest cycle for your vegetables on the dashboard."/>
    </Container>
  );
}

export default About
