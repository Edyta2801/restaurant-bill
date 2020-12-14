import React from 'react';

class Movie extends React.Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        fetch('https://srapi.herokuapp.com/v1/movies/fb91de45-f3e4-45d8-a9f6-82c4bf7577d6')
            .then(response => {
                // response.status
                return response.json()
            })
            .then(data => this.setState({ movie: data }))
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div>
                <h1>{this.state.movie.title}</h1>
            </div>
        )
    }
}
export default Movie;