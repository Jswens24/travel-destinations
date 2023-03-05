// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddDestination = () => {
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [notes, setNotes] = useState('');
//     const [international, setInternational] = useState(false);
//     const [imageURL, setImageURL] = useState('');

//     const addDestination = (e) => {
//         e.preventDefault();
//         const body = {
//             name,
//             notes,
//             international,
//             imageURL
//         }
//         console.log(body);
//         axios.post('http://localhost:4545/api/destinations', body)
//             .then(res => {
//                 console.log(res.data);
//                 navigate(`/destinationDetails/${res.data.id}`)
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             <form onSubmit={(e) => addDestination(e)}>
//                 <input onChange={e => setName(e.target.value)} placeholder='name' />
//                 <input onChange={e => setImageURL(e.target.value)} placeholder='Paste in an imageURL here' />
//                 <span>International:
//                     <input type='checkbox' checked={international ? true : false} value={international} onChange={() => setInternational(!international)} />
//                 </span>
//                 <textarea placeholder='Enter notes' onChange={e => setNotes(e.target.value)} />
//                 <button>submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddDestination


// WITH FORMIK VVVVVVVVVVV

import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddDestination = () => {
    const navigate = useNavigate()

    const initialValues = {
        name: '',
        notes: '',
        international: false,
        imageURL: ''
    }

    const onSubmit = (values) => {
        axios.post('http://localhost:4545/api/destinations', values)
            .then(res => {
                console.log(res.data);
                navigate(`/destinationDetails/${res.data.id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <input placeholder='name' value={values.name} onChange={handleChange} name='name' />
                            <textarea placeholder='notes' value={values.notes} onChange={handleChange} name='notes' />
                            <input placeholder='paste a URL' value={values.imageURL} onChange={handleChange} name='imageURL' />
                            <input type='checkbox' value={values.international} onChange={handleChange} name='international' />
                            <button>Submit</button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddDestination
