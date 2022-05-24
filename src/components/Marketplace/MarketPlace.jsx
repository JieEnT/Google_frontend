import Slider from 'react-slick';
import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components'

// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Avatar, Typography, Paper, CardHeader, Link } from '@mui/material';

// components
import Label from './components/Label';
import Image from './components/Image';
import Iconify from './components/Iconify';
import CarouselArrow from './components/CarouselArrow';

const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
`;

const MarketPlace = () => {
    return(
        <Container>
            <iframe src='https://testnets.opensea.io/collection/kale?embed=true'
                width='100%'
                height='100%'
                frameborder='0'
                allowFullScreen>
            </iframe>
        </Container>
    )
}

export default MarketPlace;