import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import {useEffect, useState} from "react";
import { get } from "../utils/httpClient";
import {useLocation} from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function MoviesGrid() {
  const [movies, setMovies] = useState ([]);
  
  const query = useQuery();
  const search = query.get("search")
  
  
  useEffect (() => {
    const searchURL = search
    ? "/search/movie?query=" + search 
    : "/discover/movie";
    get(searchURL)
      .then((data) => {
        setMovies(data.results);
      });

  }, [search]);
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
