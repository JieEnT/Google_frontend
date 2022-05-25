import React from 'react'
import styled from 'styled-components'
import PlantCard from './PlantCard';
import { vegetables } from '../_mock/_mockVeg';

import Kale from '../assets/kale.png'
import Tomato from '../assets/tomato.png'
import Cucumber from '../assets/cucumber.png'


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
        {
          vegetables.map(vege => (
              <PlantCard image= {vege.image} title={vege.title} tokenvalue={vege.tokenvalue}/>
        ))}
      </Container>
      );

  }

export default Plants