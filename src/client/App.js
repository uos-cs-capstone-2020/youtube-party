import React from "react";
//import Data from "./fetch_user";

import {BrowserRouter as Router , Route} from 'react-router-dom';

import lobby from './pages/lobby';
import nowplaying from './pages/nowplaying';
function App() {
  return (
    <Router>
      <Route path="/" exact component={lobby}/>
      <Route path="/chat" component={nowplaying} />
    </Router>
  );
}

export default App;
