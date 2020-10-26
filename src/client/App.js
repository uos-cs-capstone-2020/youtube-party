import React from "react";
//import Data from "./fetch_user";

import {BrowserRouter as Router , Route} from 'react-router-dom';
import Rooms from "./pages/Rooms";
import Lobby from './pages/Lobby';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Lobby}/>
      <Route path="/room" component={Rooms} />
    </Router>
  );
}

export default App;
