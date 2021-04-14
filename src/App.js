import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Seeder from "./pages/SeedDetail"
import MyProfile from "./pages/MyProfile"




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/"><Home/></Route>
        <Route exact path = "/myprofile"><MyProfile/></Route>
        <Route exact path = "/seeder"><Seeder/></Route>
      </Switch>

    </Router>

    
  );
}

export default App;
