import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import rg4js from "raygun4js";

import Home from "./pages/Home";

rg4js("apiKey", "RFXwCYSCxlOV8C8v6cX3g");
rg4js("enablePulse", true);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
