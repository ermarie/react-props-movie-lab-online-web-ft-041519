import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    let movieCard = movieData.map((movie) =>
      console.log(movie)
      <MovieCard title={movie.title} rating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
      
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
