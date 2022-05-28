import React, { useState, useEffect } from 'react';
//import the mock data to display
import { Box, TextField, InputAdornment } from '@mui/material';

import {
  useMoralis,
  useMoralisWeb3Api,
  useNFTBalances,
  useNativeTransactions,

} from "react-moralis";

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
      <Box sx={{
        width: {
          xs: 200, // theme.breakpoints.up('xs')
          sm: 350, // theme.breakpoints.up('sm')
          md: 600, // theme.breakpoints.up('md')
          lg: 950, // theme.breakpoints.up('lg')
          xl: 1050, // theme.breakpoints.up('xl')
        },
        mt: 1,
        mb: 4,
      }}>
        <TextField
          label="Search for your plant NFT"
          id="fullWidth"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          variant = "filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon={'bi:search'} sx={{ mr: 0.5, width: 20, height: 20 }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
  );
}
