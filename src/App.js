import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './page/Home';
import Me from './page/Me';
import Project from './page/Project'
import Reference from './page/Reference';
import Contact from './page/Contact';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/me'><Me /></Route>
          <Route path='/project'><Project /></Route>
          <Route path='/reference'><Reference /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
