import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
// import Navbar from './components/Navbar'
import Cart from './components/Cart';
import Home from './components/Home';
import PenguinCard from './components/PenguinCard';
import Checkout from './components/Checkout';
import Shop from './components/Shop';

function App() {

  const [customers, setCustomers] = useState('');
  const [penguins, setPenguins] = useState([]);
    
  useEffect(() =>  {
    fetch('/penguins')
    .then(res => res.json())
    .then(penguin => setPenguins(penguin))
    }, [])


  return (
    <div className="App">
      <BrowserRouter>
          <nav className="navbar-container">
            <NavLink to="/">Home | </NavLink>
            <NavLink to="/shop">Shop | </NavLink>
            <NavLink to="/cart">Cart | </NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop penguins={penguins}/>
            </Route>
            <Route path="/cart" >
              <Cart />
            </Route>
            <Route exact path="/checkout" >
              <Checkout />
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
 } 
export default App;
