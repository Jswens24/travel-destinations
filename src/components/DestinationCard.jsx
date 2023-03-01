import React from 'react'
import './DestinationCard.css'

const DestinationCard = ({ dest }) => {
    const { name, imageURL, international } = dest;

    return (
        <div className='destination-card'>
            <p>{name}</p>
            <p>International: {international ? 'True' : 'False'}</p>
            <img src={imageURL} />
        </div>
    )
}

export default DestinationCard