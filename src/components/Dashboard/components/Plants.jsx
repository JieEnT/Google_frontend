import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

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
        <Grid container>
            {
              vegetables.map(vege => (
                  <PlantCard image= {vege.image} title={vege.title} tokenvalue={vege.tokenvalue}/>
            ))}
        </Grid>
      );

  }



export default Plants