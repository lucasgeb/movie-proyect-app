import { MoviesGrid } from "../components/MovieGrid";
import { Search } from "../components/Search";

export function LandingPage () {
    return (
    <div> 
    <Search />
    <div>
        <p>encontrá Las últimas novedades del cine </p>
    </div>
    <MoviesGrid />
    </div>
    );
}