import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsFillSunFill, BsSearch } from 'react-icons/bs'
import { HeaderImg, TopBar } from './styles'

export function Header() {
    return (
        <>
            <TopBar className="top-bar">
                <BsFillSunFill className='light-icon' />
                <div className="search-bar">
                    <BsSearch className='search-icon' />
                    <input type="text" name="" id="" />
                </div>
                <div className="user-area">
                    <p>Login</p>
                    <AiOutlineUser className='user-icon' />
                </div>
            </TopBar>
            <HeaderImg src={'https://i.pinimg.com/originals/35/37/55/3537558babb37709e985445387078be4.jpg'} />
        </>
    )
}
