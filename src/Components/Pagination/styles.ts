import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const PaginationContainer = styled.div`
    display: flex;
    gap: .2em;
    margin: auto;
    padding: 1rem .5rem;

    p{
        padding: .3rem .7rem;
        border: 1px solid ${v.themeBlue};
        cursor: pointer;
    }
`