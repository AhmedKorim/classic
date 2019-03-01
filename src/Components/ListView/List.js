import React from 'react';
import {ScrollView, View} from "react-native";
import Movie from "./Movie";

class MoviesList extends React.Component {
    state = {
        query: 'batman',
        movies: []
    }
    getMoviesList = async () => {
        try {

            // const response = await  fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=9ad9524c`)
            // const data = await response.json()
            // return data;
            return {
                "Search": [{
                    "Title": "Batman Begins",
                    "Year": "2005",
                    "imdbID": "tt0372784",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/neY2xVmOfUM",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
                }, {
                    "Title": "Batman v Superman: Dawn of Justice",
                    "Year": "2016",
                    "imdbID": "tt2975590",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/0WWzgGyAH6Y",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                }, {
                    "Title": "Batman",
                    "Year": "1989",
                    "imdbID": "tt0096895",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/dgC9Q0uhX70",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
                }, {
                    "Title": "Batman Returns",
                    "Year": "1992",
                    "imdbID": "tt0103776",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/dgC9Q0uhX70",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
                }, {
                    "Title": "Batman Forever",
                    "Year": "1995",
                    "imdbID": "tt0112462",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/Too3qgNaYBE",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                }, {
                    "Title": "Batman & Robin",
                    "Year": "1997",
                    "imdbID": "tt0118688",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/4RBXypX4qWI",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
                }, {
                    "Title": "The Lego Batman Movie",
                    "Year": "2017",
                    "imdbID": "tt4116284",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/u-u9JeG5Ii8",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
                }, {
                    "Title": "Batman: The Animated Series",
                    "Year": "1992–1995",
                    "imdbID": "tt0103359",
                    "Type": "series",
                    "Video":"https://www.youtube.com/embed/mNVQqaHdne4",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
                }, {
                    "Title": "Batman: Under the Red Hood",
                    "Year": "2010",
                    "imdbID": "tt1569923",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/A2c9MsP3OVs",

                    "Poster": "https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
                }, {
                    "Title": "Batman: The Dark Knight Returns, Part 1",
                    "Year": "2012",
                    "imdbID": "tt2313197",
                    "Type": "movie",
                    "Video":"https://www.youtube.com/embed/TwTMsUbJKeY",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
                }], "totalResults": "357", "Response": "True"
            }
        } catch (e) {
            return void 0
        }
    }

    async componentDidMount(): void {
        const data = await this.getMoviesList();
        this.setState({movies: data.Search || []})
        console.log(data);
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.movies.map(movie => <Movie key={movie.imdbID} movieData={movie} navigate={this.props.navigate}/>)
                }
            </ScrollView>
        )
    }
}

export default MoviesList;
