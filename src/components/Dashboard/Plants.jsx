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
  return (
    <Container>
      <PlantCard image= {Kale} title="Kale" desc="Brassica oleracea var. sabellica"/>
      <PlantCard image = {Tomato} title="Tomato" desc="Solanum lycopersicum"/>
      <PlantCard image = {Cucumber} title="Cucumber" desc="Cucumis sativus"/>
    </Container>
    
  );
}

export default Plants