import React from 'react';

class Movie extends React.Component {
    state = {
        movie: {}
    }

    componentDidMount() {
           // this.props.match.params
           const { params } = this.props.match;
        fetch(`https://srapi.herokuapp.com/v1/movies/${params.id}`)
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