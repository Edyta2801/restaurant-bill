import React from 'react';
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


function App() {
  return (
    <div className="App">
      {/* <CalculatorFunction/>
      <CalculatorFunctionWithHook/>
      <CalculatorClass/> */}
      <h1>Hello!</h1>
      <Movies />
    </div>
  );
}

export default App;
