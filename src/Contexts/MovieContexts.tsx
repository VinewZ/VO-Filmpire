import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type MoviesContextProviderProps = {
    children: ReactNode
}

type MoviesContextProps = {
    fetchApi: (pageContent: string) => Promise<void>
    movieList: MovieProp[]
}

type MovieProp = {
    title: string,
    name: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
}

const MoviesContext = createContext({} as MoviesContextProps)

export function MoviesContextProvider({ children }: MoviesContextProviderProps) {
    const [movieList, setMovieList] = useState([])

    async function fetchApi(pageContent: string) {
        const API_URL = `https://api.themoviedb.org/3/${pageContent}`
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