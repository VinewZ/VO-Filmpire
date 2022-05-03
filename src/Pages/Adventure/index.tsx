import React from 'react';
import { AdventureMovieList } from '../../Components/AdventureMovieList';
import { Header } from '../../Components/Header';
import { HomeContainer } from './styles';

export function Adventure() {

    return (
        <HomeContainer>
            <Header />
            <AdventureMovieList />
        </HomeContainer>

    )
}
