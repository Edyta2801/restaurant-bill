import React from 'react';
import {Link} from 'react-router-dom';

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
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link></div>
                ))}
            </div>
        )
    }
}
export default MoviesList;