import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const MovieListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.3em;
    margin: 1em 2em;
    justify-content: space-between;
`

export const MovieListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .2em;
    width: 150px;
    align-items: center;
    text-align: center;

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
    }
    
    span{
        color: ${v.white};

        *{
            color: ${v.star};
        }   
    }

`