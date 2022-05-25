import React from 'react'
import styled from 'styled-components'
import PlantCard from './PlantCard';
import Kale from './kale.png'
import Tomato from './tomato.png'
import Cucumber from './cucumber.png'

const Container = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
`;

const Plants = () => {
      return(
      <Container>
        <PlantCard image= {Kale} title="Kale 1" tokenvalue="0.3/eth"/>
        <PlantCard image = {Tomato} title="Tomato 1" tokenvalue="0.4/eth"/>
        <PlantCard image = {Cucumber} title="Cucumber" tokenvalue="0.5/eth"/>
        <PlantCard image= {Kale} title="Kale 2" tokenvalue="0.3/eth"/>
        <PlantCard image = {Tomato} title="Tomato 2" tokenvalue="0.4/eth"/>
      </Container>
      );

  }

export default Plants