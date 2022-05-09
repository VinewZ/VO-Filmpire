import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const NavSidebar = styled.nav`
    position: sticky;
    top: 0;
    width: 230px;
    height: 100vh;
    border-right: 6px solid ${v.themeBlue};

    h1{
        font-size: 2.5rem;
        text-align: center;
        color: ${v.themeBlue};
        letter-spacing: 2px;
    }

    hr{
        margin-block: 1em;
        color: ${v.lightGray};
    }

    p.subtitle{
        font-weight: 200;
        font-size: 1.2rem;
        color: ${v.gray};
        padding-inline: 1em;
    }
    
    ul a{
        text-decoration: none;
    }
`

export const MenuItem = styled.li`
    display: flex;
    gap: 1em;
    align-items: center;
    color: ${v.darkGray};
    font-size: 1.3rem;
    margin: .4em 1em;
    font-weight: 200;
    letter-spacing: 1px;

`