import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <h1 align="center">Chennalloor</h1>
      <div className="Components">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a href="">
              <About />
            </a>
          </li>
          <li>
            <a href="">
              <Contact />
            </a>
          </li>
          <li>
            <a href="">
              <Home />
            </a>
          </li>
          <li>
            <a href="">
              <Products />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
