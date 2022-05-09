import React from 'react';
import { ComedyMovieList } from '../../Components/ComedyMovieList';
import { Header } from '../../Components/Header';
import { HomeContainer } from './styles';

export function Comedy() {

    return (
        <HomeContainer>
            <Header />
            <ComedyMovieList />
        </HomeContainer>

    )
}
