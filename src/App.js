import React, { useContext } from 'react';
import './App.css';
import Header from "./components/Header";
import Data from './components/Data';
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard.js";
import { AuthContext } from "./Context/AuthContext";
import Login from "./components/Login";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      {
        user ? (
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Data} />
              <Route path="/about" component={About} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
