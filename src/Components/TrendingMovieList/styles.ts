import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const TitlePage = styled.h2`
    margin-left: 1em;
    font-size: 2rem;
    color: ${v.white}
`

export const MovieListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    width: 100%;
    padding: 1em;

`

export const MovieListItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: ${v.white};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
    }

    img{
        object-fit: cover;
        width: 150px;
        border-radius: 20px;
        margin-bottom: 1.85em;
    }
    
    span{
        display: grid;
        place-items: center;
        color: ${v.white};
        background-color: ${v.themeBg};
        position: absolute;
        width: 34px;
        height: 34px;
        bottom: 57px;
        left: 20px;
        border-radius: 50%;
    }

    span.green{
        border: 1px solid green;
    }
    span.yellow{
        border: 1px solid yellow;
    }
    span.red{
        border: 1px solid red;
    }

`