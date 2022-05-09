import React, { useEffect } from 'react';
import { useMovies } from '../../Contexts/MovieContexts';
import { MovieListContainer, MovieListItem, TitlePage } from './styles';

export function DocumentaryMovieList() {

    const ACTION_API_URL = 'discover/movie?api_key=57732b15bda1a9fb2b8390c0b77e7df3&with_genres=99'
    const { fetchApi, movieList } = useMovies()

    useEffect(() => {
        fetchApi(ACTION_API_URL)
    }, [])

    function renderMovies() {
        return (
            movieList.map((movie, index) => (
                <MovieListItem key={index}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                    <span className={(movie.vote_average < 4) ? 'red' : (movie.vote_average < 7) ? 'yellow' : 'green'}>{movie.vote_average}</span>
                    {movie.title ? <p key={index}>{movie.title}</p> : <p key={index}>{movie.name}</p>}
                    <p>{movie.release_date}</p>
                </MovieListItem>
            ))
        )
    }

    return (
        <>
            <TitlePage>Action</TitlePage>
            <MovieListContainer>
                {renderMovies()}
            </MovieListContainer>
        </>
    )
}
