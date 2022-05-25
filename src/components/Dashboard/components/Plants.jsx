import React from 'react'
import styled from 'styled-components'
import PlantCard from './PlantCard';
import { vegetables } from '../_mock/_mockVeg';

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