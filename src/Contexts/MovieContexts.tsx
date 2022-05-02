import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type MoviesContextProviderProps = {
    children: ReactNode
}

type MoviesContextProps = {
    fetchApi: () => Promise<void>
    movieList: MovieProp[]
}

type MovieProp = {
    title: string,
    name: string,
    overview: string,
    poster_path: string,
    vote_average: number,
}

const API_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=57732b15bda1a9fb2b8390c0b77e7df3'

const MoviesContext = createContext({} as MoviesContextProps)

export function MoviesContextProvider({ children }: MoviesContextProviderProps) {
    const [movieList, setMovieList] = useState([])

    async function fetchApi() {
        const response = await axios.get(API_URL)
        setMovieList(response.data.results)
    }
    return (
        <MoviesContext.Provider value={{ fetchApi, movieList }}>
            {children}
        </MoviesContext.Provider>
    )
}

export function useMovies() {
    const value = useContext(MoviesContext)
    return value
}