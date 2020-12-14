import React from 'react';

class MoviesList extends React.Component {
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
export default MoviesList;