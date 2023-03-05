import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active-nav' : 'inactive-nav'}>Home</NavLink>
            <NavLink to='addDestination' className={({ isActive }) => isActive ? 'active-nav' : 'inactive-nav'}>Add New Destination!</NavLink>
        </header>
    )
}

export default Header