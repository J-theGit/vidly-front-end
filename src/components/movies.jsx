import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = id => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({ movies });
    };
    render() {
        if (!this.state.movies.length)
            return <p>There are no movies in the database</p>;

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                this.handleDelete(movie._id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;
