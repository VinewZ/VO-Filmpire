import React, { useEffect } from 'react';
import { useMovies } from '../../Contexts/MovieContexts';
import { MovieListContainer, MovieListItem, TitlePage } from './styles';

export function TrendingMovieList() {
    const TRENDING_API_URL = 'trending/all/day?api_key=57732b15bda1a9fb2b8390c0b77e7df3'
    const { fetchApi, movieList } = useMovies()

    useEffect(() => {
        fetchApi(TRENDING_API_URL)
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
            <TitlePage>Trending</TitlePage>
            <MovieListContainer>
                {renderMovies()}
            </MovieListContainer>
        </>
    )
}
