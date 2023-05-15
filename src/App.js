import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Subscription from "./Subscription";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="left-container">
          <Hero />
        </div>
        <div className="right-container">
          <Subscription />
        </div>
      </div>
    </div>
  );
}

export default App;
