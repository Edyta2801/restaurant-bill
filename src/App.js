import React from 'react';
import './App.css';
// import {CalculatorFunction, CalculatorClass, CalculatorFunctionWithHook}  from './components/Calculator';
import MoviesList from './components/Movies/MoviesList';
import Movie from './components/Movies/Movie';


// function MoviesHooks() {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     fetch('https://srapi.herokuapp.com/v1/movies')
//       .then(response => {
//         // response.status
//         return response.json()
//       })
//       .then(data => setMovies( data ))
//       .catch(error => console.error(error));

//   }, []);

//   return (
//     <div>
//       {movies.map(movie => (
//         <div key={movie.id}>{movie.title}</div>
//       ))}
//     </div>

//   )
// }

function App() {
  return (
    <div className="App">
      {/* <CalculatorFunction/>
      <CalculatorFunctionWithHook/>
      <CalculatorClass/> */}
      <h1>Class component!</h1>
      <MoviesList />
      <Movie />
      {/* <h1>Function component</h1> */}
      {/* <MoviesHooks /> */}
    </div>
  );
}

export default App;
