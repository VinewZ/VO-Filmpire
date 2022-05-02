import React from 'react';
import { SidebarData } from './SidebarData';
import { MenuItem, NavSidebar } from './styles';

export function Sidebar() {

    function renderSidebar() {
        return (
            SidebarData.map((menuItem, index) => (
                <MenuItem key={index}>
                    <i>{menuItem.icon}</i>
                    <p>{menuItem.content}</p>
                </MenuItem>
            ))
        )
    }

    return (
        <NavSidebar>
            <ul>
                {renderSidebar()}
            </ul>
        </NavSidebar>
    )
}
