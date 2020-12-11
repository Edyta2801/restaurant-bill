import React, { useState, useEffect } from 'react';
import './App.css';
// import {CalculatorFunction, CalculatorClass, CalculatorFunctionWithHook}  from './components/Calculator';

class Movies extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('https://srapi.herokuapp.com/v1/movies')
      .then(response => {
        // response.status
        return response.json()
      })
      .then(data => this.setState({ movies: data }))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    )
  }
}


function MoviesHooks() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://srapi.herokuapp.com/v1/movies')
      .then(response => {
        // response.status
        return response.json()
      })
      .then(data => setMovies( data ))
      .catch(error => console.error(error));

  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>

  )
}

function App() {
  return (
    <div className="App">
      {/* <CalculatorFunction/>
      <CalculatorFunctionWithHook/>
      <CalculatorClass/> */}
      <h1>Class component!</h1>
      <Movies />
      <h1>Function component</h1>
      <MoviesHooks />
    </div>
  );
}

export default App;
