import React from 'react';

import api from '../../api';

class Movie extends React.Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        // this.props.match.params
        const { params } = this.props.match;


        api.get(`/movies/${params.id}`)
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