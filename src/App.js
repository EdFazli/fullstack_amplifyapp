//import logo from './logo.svg';
import './App.css';
import React from "react";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
