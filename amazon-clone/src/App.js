import React from 'react';
import Headers from './header/Header';
import './App.css';
import Home from './home/Home';
import Checkout from './checkoutPage/Checkout';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './login/Login';

function App() {
  return (
    <Router>
     <div className="app">
      
     <Switch>
     <Route path="/Login">
        <Login />
         </Route>
       <Route path="/checkout">
       <Headers />
          <Checkout />
         </Route>
       <Route path="/">
       <Headers />
         <Home />
       </Route>
      </Switch>
       </div>
    </Router>
  );
}

export default App;
