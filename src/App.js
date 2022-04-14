import React from "react";

import { Navbar, Brand, Cta } from "./components";
import {
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Blog,
  Footer,
} from "./containers";

import "./App.css";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
