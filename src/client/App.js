import React from "react";
//import Data from "./fetch_user";

import {BrowserRouter as Router , Route} from 'react-router-dom';
import Chat from "./components/Chat"
import Join from './components/Join';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
