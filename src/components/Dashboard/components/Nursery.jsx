import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Plants from './Plants';
import PlantSearch from './PlantSearch';

import { vegetables } from '../_mock/_mockVeg';

const Container = styled.div`
    margin:20px 100px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px black;
    box-shadow: 0px 0px 15px -8px black;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const AboutContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:auto;
`;
const Title = styled.h1`
  font-size:30px;
  color:black;
  text-align:center;
  margin-bottom:25px;
  margin-top:5px;
`;

const Desc = styled.p`
  font-size:15px;
  color:black;
  text-align:left;
  margin:15px;
  font-weight:bold;
`;


const Nursery = () => {
  //result of the filtered plants
  const [searchResult, setSearchResult] = useState([]);

  //Set initial data
  useEffect(() => {
    setSearchResult(vegetables);
  }, []);

  return (
    <Container>
      <AboutContainer>
        <PlantSearch initialData={vegetables} filterSearch={setSearchResult}/>
        <Plants filteredSearchResults={searchResult}/>
      </AboutContainer>
    </Container>
  )
}
export default Nursery
