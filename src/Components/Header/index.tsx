import React, { FormEvent, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { IoIosContrast } from 'react-icons/io'
import { useMovies } from '../../Contexts/MovieContexts'
import { HeaderContainer, HeaderImg, HeaderInfoContainer, TopBar } from './styles'

export function Header() {
    const { movieList, fetchApi } = useMovies()
    const [ search, setSearch ] = useState('')

    function handleSearch(e: FormEvent) {
        e.preventDefault()
        fetchApi(`search/movie?api_key=57732b15bda1a9fb2b8390c0b77e7df3&query=${search}`)
    }
    return (
        <>
            <TopBar className="top-bar">
                <IoIosContrast className='light-icon' />
                <form className="search-bar">
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <button onClick={(e) => handleSearch(e)} > <BsSearch className='search-icon' /></button>
                </form>
                <div className="user-area">
                    <p>Login</p>
                    <AiOutlineUser className='user-icon' />
                </div>
            </TopBar>
            <HeaderContainer>
                <HeaderImg src={ movieList.length > 0 ? `https://image.tmdb.org/t/p/original${movieList[0].poster_path}` : undefined} />
                <HeaderInfoContainer>
                    <h3>{movieList.length > 0 ? movieList[0].title : undefined}</h3>
                    <p>{movieList.length > 0 ? movieList[0].release_date : undefined}</p>
                    <p>{movieList.length > 0 ? movieList[0].overview : undefined}</p>
                </HeaderInfoContainer>
            </HeaderContainer>
        </>
    )
}
