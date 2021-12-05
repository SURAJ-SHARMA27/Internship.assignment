import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
  
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
     <Switch>
     <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
     </Switch>

    </Router>
    </>
   
      
  )
}

export default App
