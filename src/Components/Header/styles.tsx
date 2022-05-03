import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const HeaderImg = styled.img`
    object-fit: cover;
    height: 300px;
    padding: 1em;
    border-radius: 20px;
`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 2em;
    background-color: ${v.themeRed};

    .light-icon{
        font-size: 1.7rem;
        color: ${v.white}
    }

    .search-bar{
        flex: .3;
        position: relative;

        .search-icon{
            left: 5px;
            bottom: 5px;
            position: absolute;
            color: ${v.white};
        }

        input[type=text]{
            width: 100%;
            background-color: ${v.themeRed};
            border: none;
            border-bottom: 1px solid ${v.white};
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