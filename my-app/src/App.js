import React, { Component } from "react";
import MarvelCards from "./components/TinderCards";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HeroData from "./components/HeroDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Route exact={true} path="/" component={MarvelCards} />
          </div>
          <div>
            <Route path="/hero/:value" component={HeroData} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
