import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { MenuItem, NavSidebar } from './styles';

export function Sidebar() {

    function renderSidebar() {
        return (
            SidebarData.map((menuItem, index) => (
                <Link to={menuItem.redirect} key={index}>
                    <MenuItem>
                        <i>{menuItem.icon}</i>
                        <p>{menuItem.content}</p>
                    </MenuItem>
                </Link>
            ))
        )
    }

    return (
        <NavSidebar>
            <h1>FILMPIRE</h1>
            <hr/>

            <p className="subtitle">Genre</p>
            <ul>
                {renderSidebar()}
            </ul>
        </NavSidebar>
    )
}
