import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='addDestination'>Add New Destination!</NavLink>
        </header>
    )
}

export default Header