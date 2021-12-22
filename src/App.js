import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";

import Ind from "./components/Ind";
import Graph from "./components/Graph"


function App() {
  return (
  <>

 <Router>
     <Switch>
     <Route exact path="/">
            <Ind/>
          </Route>
          <Route exact path="/graph">
            <Graph/>
          </Route>
     </Switch>

    </Router>
  </>
  );
}

export default App;
