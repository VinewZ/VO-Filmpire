import React from 'react';
import { ActionMovieList } from '../../Components/ActionMovieList';
import { Header } from '../../Components/Header';
import { HomeContainer } from './styles';

export function Action() {

    return (
        <HomeContainer>
            <Header />
            <ActionMovieList />
        </HomeContainer>

    )
}
