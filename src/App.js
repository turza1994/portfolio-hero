import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/porjectDetails/:id">
          <ProjectDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
