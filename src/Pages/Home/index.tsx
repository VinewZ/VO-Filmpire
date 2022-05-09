import React from 'react';
import { Header } from '../../Components/Header';
import { TrendingMovieList } from '../../Components/TrendingMovieList';
import { HomeContainer } from './styles';

export function Home() {

    return (
        <HomeContainer>
            <Header />
            <TrendingMovieList />
        </HomeContainer>

    )
}
