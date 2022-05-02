import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useMovies } from '../../Contexts/MovieContexts';
import { MovieListContainer, MovieListItem } from './styles';

export default function MovieList() {

    const { fetchApi, movieList } = useMovies()

    function renderMovies() {
        console.log(movieList)
        return (
            movieList.map((movie, index) => (
                <MovieListItem key={index}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                    {movie.title ? <p key={index}>{movie.title}</p> : <p key={index}>{movie.name}</p>}
                    <span>{movie.vote_average} <AiFillStar /></span>
                </MovieListItem>
            ))
        )
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <MovieListContainer>
            {renderMovies()}
        </MovieListContainer>
    )
}
