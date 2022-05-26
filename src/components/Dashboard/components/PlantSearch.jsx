import React, { useState, useEffect } from 'react';
//import the mock data to display
import { Grid } from '@mui/material';
import { TextField, InputAdornment } from '@mui/material';

import Iconify from '../styling/Iconify';

export default function PlantSearch({ initialData, filterSearch }) {
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const search = () => {
      //filter out the data and set the appropriate values for results
      //logic to do the filtering, we will filter by title based on substring
      let filtered = initialData;

      if (!(title === '')) {
        filtered = filtered.filter((element) => element.title.toLowerCase().startsWith(title.toLowerCase()));
      }

      filterSearch(filtered);
    };

    //if title is an empty string will not search, if it isnt it will search.
    const timeoutId = setTimeout(() => {
      if (title) {
        search();
      }else {
        filterSearch(initialData);
      }
    }, 500);

    //the clearTimeout function will return a callTimeout which will be called at the start of every rerender
    //for this scenario, everytime the title is changed the clearTimeout will be executed first
    return () => {
      clearTimeout(timeoutId);
    };
  }, [title, filterSearch, initialData]);

  return (
    <Grid container>
      <Grid item xs={12} mr={5} ml={0} mb={4} mt={2}>
        <TextField
          label="Search for your plant NFT"
          id="fullWidth"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon={'bi:search'} sx={{ mr: 0.5, width: 20, height: 20 }} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
