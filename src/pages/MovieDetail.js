
import styles from "./MovieDetail.module.css";
import {useParams} from "react-router"
import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';

export function MovieDetail() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={styles.detailsContainer}>
    <img 
    className={`${styles.columnas} ${styles.movieImg}`} 
    src={imageUrl} 
    alt={"movie.title"} 
    />
    <div className={`${styles.columnas} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Título original: </strong> {movie.title}</p>
        <p>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Descripción (En inglés): </strong>{movie.overview}</p>
    </div>
    
    </div>;
}