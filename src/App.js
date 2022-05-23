import React, {useState, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Navbar from "./components/Navigation/Navbar";
import Intro from "./components/Intro";
import Dashboard from './components/Dashboard/Dashboard'
import { AuthContext } from './context/auth-context';

const App = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

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
        routes = (
          <Routes>
            <Route path="/" element={<Intro/>} exact/>
            <Route path="/marketplace" element={'marketplace'} exact/>
            <Route path="/:userId/dashboard" element={<Dashboard/>} exact/>
            <Route path="/:userId/profile" element={'profile'} exact/>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        )
  }else{
      routes = (
          <Routes>
            <Route path="/" element={<Intro/>} exact/>
            <Route path="/marketplace" element={'marketplace'} exact/>
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
