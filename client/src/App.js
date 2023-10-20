import React from "react";
import Home from "./screens/Home";
import Test from "./components/test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prediction from "./screens/Prediction";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/predict" element={<Prediction />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
