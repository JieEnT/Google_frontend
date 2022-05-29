import React from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard';

const DigitalToken = 'https://storage.googleapis.com/pomona/digitaltoken.jpg';
const Vegetable = 'https://storage.googleapis.com/pomona/farming.jpg';
const Earning = 'https://storage.googleapis.com/pomona/11229.jpg';


const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const About = () => {
  return (
    <Container>
      <AboutCard image= {DigitalToken} title="Decentralizing Agriculture" desc="We enable consumers to be actively involved in the growth of their local food sources through the use of Semi-Fungible Tokens."/>
      <AboutCard image = {Vegetable} title="Lifecycle Traceability" desc="We provide traceability for consumers to track the real-time growth of their vegetables in farms through IoT integration."/>
      <AboutCard image = {Earning} title="Profit & Risk Sharing" desc="As SFT sales offset operational costs for urban farmers to minimize cyclical risks, they reciprocate by profit-sharing."/>
    </Container>
  );
}

export default About
