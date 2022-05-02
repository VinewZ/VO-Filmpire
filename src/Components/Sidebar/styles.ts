import styled from 'styled-components'
import * as v from '../../GlobalStyles/Variables'

export const NavSidebar = styled.nav`
    position: sticky;
    top: 0;
    display: grid;
    place-items: center;
    gap: 5em;

    width: 230px;
    height: 100vh;
    padding: 0 4em;
    border-right: 3px solid ${v.themeRed};
`

export const MenuItem = styled.li`
    display: flex;
    gap: 1em;
    align-items: center;
    color: ${v.themeRed};
`