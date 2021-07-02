import React from 'react';
import './App.css';
import Header from "./components/Header";
import Data from './components/Data';
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard.js";

function App() {

  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Data} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
