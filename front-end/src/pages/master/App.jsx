import React from "react";
import "./App.scss";

import logo from "../../assets/logo.svg";
import Routes from "../../routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
