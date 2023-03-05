import React from 'react'
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css'

const DestinationCard = ({ dest }) => {
    const { name, imageURL, international, id } = dest;
    const navigate = useNavigate();

    return (
        <div className='destination-card'>
            <p>{name}</p>
            <p>International: {international ? 'True' : 'False'}</p>
            <img src={imageURL} />
            <button onClick={() => navigate(`/destinationDetails/${id}`)}>See More details</button>
        </div>
    )
}

export default DestinationCard