import React, {useState, useCallback, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Navbar from "./components/Navigation/Navbar";
import Intro from "./components/Intro";
import Dashboard from './components/Dashboard/Dashboard'
import MarketPlace from './components/Marketplace/MarketPlace';
import { AuthContext } from './context/auth-context';

const App = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
 
  //Set session storage so that is is still logged in upon refresh
  useEffect(() => {
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem("isLoggedIn")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);


  // Creation of routes
  let routes;

  //Switch routes in accordance to whether it is logged in
  if(isLoggedIn){
        {console.log("getting logged in")}
        routes = (
          <Routes>
            <Route path="/" element={<Intro/>} exact/>
            <Route path="/marketplace" element={<MarketPlace/>} exact/>
            <Route path="/:userId/dashboard" element={<Dashboard/>} exact/>
            <Route path="/:userId/profile" element={'profile'} exact/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        )
  }else{
    {console.log("getting logged out")}
      routes = (
          <Routes>
            <Route path="/" element={<Intro/>} exact/>
            <Route path="/marketplace" element={<MarketPlace/>} exact/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navbar/>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;
