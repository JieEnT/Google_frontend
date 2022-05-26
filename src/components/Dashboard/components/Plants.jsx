import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import PlantCard from './PlantCard';

const Container = styled.div`
    height:100%;
    justify-content:center;
    align-items:center;
    margin:auto;
`;

const Plants = ({filteredSearchResults}) => {
      return(
        <Grid container>
            {
              filteredSearchResults.map(vege => (
                  <PlantCard image= {vege.image} title={vege.title} tokenvalue={vege.tokenvalue}/>
            ))}
        </Grid>
      );

  }



export default Plants