import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import SmurfContextProvider from './contexts/SmurfContext';

ReactDOM.render(
  <SmurfContextProvider>
    <App />
  </SmurfContextProvider>,
  document.getElementById("root")
);
