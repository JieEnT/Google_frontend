import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Navbar from "./components/Navigation/Navbar";
import Intro from "./components/Intro";
import Dashboard from "./components/Dashboard/Dashboard";

// Creation of routes
let routes;

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

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>{routes}</main>
    </Router>
  )
};

export default App;
