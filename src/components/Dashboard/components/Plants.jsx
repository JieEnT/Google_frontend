import React from 'react';
import styled from 'styled-components';
import { Grid, Box } from '@mui/material';

import PlantCard from './PlantCard';

const Container = styled.div`
    height:100%;
    justify-content:center;
    align-items:center;
    margin:auto;
`;

const Plants = ({filteredSearchResults}) => {
  
      return(

         <Box
          sx={{
            display: 'grid',
            gap: 5,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
           {
              filteredSearchResults.map(vege => (
                  <PlantCard image= {vege.image} title={vege.title} tokenvalue={vege.tokenvalue}/>
            ))}
        </Box>
      );

  }



export default Plants