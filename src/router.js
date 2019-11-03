import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";


// **note: use Example folder as example to create new screens 😉

// import your screen here:

import Home from './screens/Home'
import Login from './screens/Login' 
import Forgot from './screens/Forgot' 
import NotFound from './screens/NotFound' 


function AppRouter() {
  return (
    <Router>
      <div> 
        {/* Global components goes here */}
        <Switch>
          {/* Declare you routes like this */}
          <Route path="/" exact={true}><Home /></Route>
          <Route path="/login" exact={true}><Login /></Route>
          <Route path="/forgot" exact={true}><Forgot /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
        {/* Others global components can goes here also */}
      </div>
    </Router>
  );
}

export default AppRouter;