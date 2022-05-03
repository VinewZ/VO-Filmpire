import React from 'react';
import { AnimationMovieList } from '../../Components/AnimationMovieList';
import { Header } from '../../Components/Header';
import { HomeContainer } from './styles';

export function Animation() {

    return (
        <HomeContainer>
            <Header />
            <AnimationMovieList />
        </HomeContainer>

    )
}
