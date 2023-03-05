import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const [destination, setDestination] = useState({});

    const getDestination = () => {
        axios.get(`http://localhost:4545/api/destination/${id}`)
            .then(res => {
                console.log(res.data);
                setDestination(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDestination();
    }, [])



    return (
        <div className='detail-container'>
            <section id='detail-banner' style={{
                background: `url(${destination.imageURL})`,
                backgroundSize: 'cover'
            }}>
                <p>{destination.name}</p>
            </section>
            <section id='detail-info-box'>
                <p>International: {destination.international ? 'True' : 'False'}</p>

                <p>{destination.notes}</p>
            </section>
        </div>
    )
}

export default Details