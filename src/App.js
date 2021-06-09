/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { SearchResults } from './pages/SearchResults'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import axios from 'axios'

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/search" component={SearchResults} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
