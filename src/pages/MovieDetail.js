import movie from './movie.json';
import styles from "./MovieDetail.module.css";

export function MovieDetail() {
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