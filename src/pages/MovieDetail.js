
import { useEffect, useState } from 'react';
import {useParams} from "react-router"
import styles from "./MovieDetail.module.css";
import { get } from '../utils/httpClient';
import { Spinner } from "../components/spinner";

export function MovieDetail() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
  
      get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setIsLoading(false);
      });
    }, [movieId]);
  
    if (isLoading) {
      return <Spinner />;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (<div className={styles.detailsContainer}>
    <img 
    className={`${styles.columnas} ${styles.movieImg}`} 
    src={imageUrl} 
    alt={"movie.title"} 
    />
    <div className={`${styles.columnas} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Título original: </strong> {movie.title}</p>
        <p><strong>Género: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Descripción (inglés): </strong>{movie.overview}</p>
    </div>
    
    </div>
    );
}