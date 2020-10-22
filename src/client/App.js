import React from "react";
//import Data from "./fetch_user";

import {BrowserRouter as Router , Route} from 'react-router-dom';
import Room from "./components/Room"
import Join from './components/Join';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/room" component={Room} />
    </Router>
  );
}

export default App;
