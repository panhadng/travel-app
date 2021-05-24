import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Navbar />      
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/services' exact component = {Services} />
          <Route path = '/products' exact component = {Products} />
          <Route path = '/sign-up' exact component = {SignUp} />
        </Switch>     
      </Router> 
    </div>
  );
}

export default App;
