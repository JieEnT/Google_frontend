import React, {useState, useContext, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './LoginModal.css';
import {AuthContext} from '../context/auth-context';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const LoginForm = (props) => {
  const auth = useContext(AuthContext);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    auth.login();
    //To exit the modal after login
    props.onCancel();
  },[]);

  return(
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
  )
}

const ModalOverlay = props => {
  const content = (
      // Style prop for adding of inline-styles
      <div className={`modal ${props.className}`} style={props.style}>
          <LoginForm {...props}/>
      </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const Modal = props => {
    return (
        <React.Fragment>
            {/* Backdrop is to make everything at the back darker */}
            {props.show && <Backdrop onClick={props.onCancel}/>}
            {/* we need the unmount on exit to get rid of the Modal through transition*/}
            <CSSTransition 
                in={props.show} 
                mountOnEnter 
                unmountOnExit 
                timeout={200} 
                classNames="modal"
            >
                {/* We will spread the attributes of props unto ModalOverlay, when the Modal is triggered 
                then the ModalOverlay will be triggered and rendered in the index.html */}
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;