import React, { Component } from "react";
import Main from "./components/main/main";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
