import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
    {id: 1, title: "Thunderbolts *", release_date: "2025"},
    {id: 2, title: "Fantastic Four: First Steps *", release_date: "2025"},
    {id: 3, title: "Avengers: Secret Wars *", release_date: "2025"},
    {id: 4, title: "Tron: Ares", release_date: "2025"},
    {id: 5, title: "The Batman Part II", release_date: "2025"},
    {id: 6, title: "Mission: Impossible – Dead Reckoning Part Two", release_date: "2025"},
];

    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
}

export default Home;