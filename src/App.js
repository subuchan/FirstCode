import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Nav,NavLink } from "react-router-dom";
import NavBar from './Navbar';
import Login from './Login';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={NavBar}/>
        <Route path="/login" component={Login}/>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
