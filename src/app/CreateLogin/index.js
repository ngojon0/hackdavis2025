import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-dgc7m3h53pfceqmb.us.auth0.com"
    clientId="Q2nkreaDOhu1AcN3OVgI4toOfF9kOPUI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to NAMI Yolo</h1>
      <LoginButton />
    </div>

    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Goodbye</h1>
      <LogoutButton />
    </div>

    <App />
  </Auth0Provider>,
);