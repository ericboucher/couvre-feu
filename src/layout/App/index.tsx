import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar";
import NotFound from "../../routes/NotFound";
import HomePage from "../../routes/Homepage";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />

        <div id="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route default component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
