import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title: "Thunderbolts *", release_date: "2025"}}/>
      <MovieCard movie={{title: "Fantastic Four: First Steps *", release_date: "2025"}}/>
    </>

  )
}

export default App
