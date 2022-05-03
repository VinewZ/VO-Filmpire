import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const HeaderContainer = styled.header`
    display: grid;
    place-items: center;
    position: relative;
    padding: 1em;
`
export const HeaderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    position: absolute;
    bottom: 40px;
    left: 30px;
    color: ${v.white};
    font-size: 1.3rem;
    max-width: calc(70% - 3em);
`

export const HeaderImg = styled.img`
    width: 100%;
    object-fit: cover;
    height: 450px;
    border-radius: 20px;
    filter: brightness(.5);
`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 2em;
    background-color: ${v.themeBlue};

    .light-icon{
        font-size: 1.7rem;
        color: ${v.white}
    }

    .search-bar{
        flex: .3;
        position: relative;

        button{
            right: 5px;
            bottom: 5px;
            position: absolute;
            color: ${v.white};
            background: transparent;
            border: none;
        }

        input[type=text]{
            width: 100%;
            background-color: ${v.themeBlue};
            border: none;
            border-bottom: 1px solid ${v.white};
            border-radius: 5px;
            color: ${v.white};
            padding: .3em .5em;
        }
    }

    .user-area{
        display: flex;
        gap: 1em;
        justify-content: center;
        align-items: center;
        color: ${v.white};

        .user-icon{
            font-size: 1.7rem;
        }
    }

`