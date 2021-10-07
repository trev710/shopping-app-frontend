import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'


function App(component) {

  return (
    <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/login" component={Login}/>
                  </Switch>
             </div>
       </BrowserRouter>
  );
 } 
export default App;
