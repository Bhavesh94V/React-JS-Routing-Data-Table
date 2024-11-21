import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const [state, setState] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data);
                setState(data)
            })
    }, [])

    const containerStyle = {
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1>Product Details</h1>
            <h2>{state.title}</h2>
            <img src={state.image} height={200} width={200} alt="" />
            <h2>{state.description}</h2>
            <h3 style={{color:'red'}}>Price : ${state.price}</h3>
        </div>
    )
}
