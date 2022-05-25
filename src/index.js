import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
  <MoralisProvider serverUrl="https://agi0q99rdxpn.usemoralis.com:2053/server" appId="Siz8fsWRMUWIjtBBMzkibOqQWoNckMEZD1GmlL55">
    <App />
  </MoralisProvider>  
  </React.StrictMode>,
  document.getElementById('root'));