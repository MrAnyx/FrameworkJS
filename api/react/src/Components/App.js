import React from 'react';
import Navbar from "./Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home/Home"
import ListUsers from "./ListUsers/ListUsers"
import User from "./User/User"
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={ListUsers}/>
          <Route path="/user/:user" component={User}/>
        </Switch>

        <Footer/>

      </Router>
    </div>
    
    
  );
}

export default App;
