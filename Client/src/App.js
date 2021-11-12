import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from "./config/Routes";

function App() {
  return (
    <Auth0Provider
    domain="dev-rp6b3m9r.us.auth0.com"
    clientId="9CtY1Jhnmq0HdyPR7GmbKygLZPdEmT2D"
    redirectUri={window.location.origin}
    >
      <Routes />
    </Auth0Provider>
  );
}

export default App;
