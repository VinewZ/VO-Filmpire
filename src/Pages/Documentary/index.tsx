import React from 'react';
import { DocumentaryMovieList } from '../../Components/DocumentaryMovieList';
import { Header } from '../../Components/Header';
import { HomeContainer } from './styles';

export function Documentary() {

    return (
        <HomeContainer>
            <Header />
            <DocumentaryMovieList />
        </HomeContainer>

    )
}
