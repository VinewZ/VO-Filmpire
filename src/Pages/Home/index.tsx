import React from 'react';
import { Header } from '../../Components/Header';
import MovieList from '../../Components/MovieList';
import { HomeContainer } from './styles';

export function Home() {

    return (
        <HomeContainer>
            <Header />
            <MovieList />
        </HomeContainer>

    )
}
