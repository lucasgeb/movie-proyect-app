
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <div class="circle"></div>
          <h1>
            <span>Proyect</span>
            <br />
            <span></span>
            <br />
            <span>Movie</span>
            <br />
            <span></span>
            <br />
            <span>APP</span>
          </h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetail />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
