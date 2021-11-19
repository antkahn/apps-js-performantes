import React, { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Graph, Home, Random } from "./components";
import Highlight from "./components/Highlight";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <header className="App__header">
          <div className="App__header__title">
            Apps JS performantes <Random />
          </div>
          <div className="App__header__links">
            <NavLink
              activeClassName="App__header__link__selected"
              className="App__header__link"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="App__header__link__selected"
              className="App__header__link"
              exact
              to="/graph"
            >
              Graph
            </NavLink>
            <NavLink
              activeClassName="App__header__link__selected"
              className="App__header__link"
              exact
              to="/highlight"
            >
              Highlight
            </NavLink>
          </div>
        </header>
        <div className="App__body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/graph" element={<Graph />} />
            <Route exact path="/highlight" element={<Highlight />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
