import { MoviesGrid } from "./components/MovieGrid";
import styles from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Películas</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetail /></Route>
          <Route path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
  );
}
