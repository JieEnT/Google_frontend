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


const Plants = ({level}) => {
  switch(level) {
    case 0:
      return(
      <Container>
        <PlantCard image= {Kale} title="Kale" desc="O NFTs" value="0.3/eth"/>
        <PlantCard image = {Tomato} title="Tomato" desc="0 NFTs" value="0.4/eth"/>
        <PlantCard image = {Cucumber} title="Cucumber" desc="0 NFTs" value="0.5/eth"/>
      </Container>
      )
    case 1:
      return (
      <Container>
      <PlantCard image= {Kale} title="Kale" desc="O NFTs" value="0.3/eth"/>
      <PlantCard image = {Tomato} title="Tomato" desc="1 NFTs" value="0.4/eth"/>
      <PlantCard image = {Cucumber} title="Cucumber" desc="3 NFTs" value="0.5/eth"/>
    </Container>
      );
      case 2: 
      return (
        <Container>
        <PlantCard image= {Kale} title="Kale" desc="3 NFTs" value="0.3/eth"/>
        <PlantCard image = {Tomato} title="Tomato" desc="O NFTs" value="0.4/eth"/>
        <PlantCard image = {Cucumber} title="Cucumber" desc="2 NFTs" value="0.5/eth"/>
    </Container>
      )
      default:
        return (
        <Container>
          <PlantCard image= {Kale} title="Kale" desc="1 NFTs" value="0.3/eth"/>
          <PlantCard image = {Tomato} title="Tomato" desc="1 NFTs" value="0.3/eth"/>
          <PlantCard image = {Cucumber} title="Cucumber" desc="1 NFTs" value="0.3/eth"/>
      </Container>

        );

  }
  // return (
  //   <Container>
  //     <PlantCard image= {Kale} title="Kale" desc="Brassica oleracea var. sabellica"/>
  //     <PlantCard image = {Tomato} title="Tomato" desc="Solanum lycopersicum"/>
  //     <PlantCard image = {Cucumber} title="Cucumber" desc="Cucumis sativus"/>
  //   </Container>
    
  // );
}

export default Plants