import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const linkStyle = {
        color: 'white',
        margin: '0 10px',
        textDecoration: 'none',
        fontWeight: 'bold',
    };

    return (

        <div style={{ padding: '10px', backgroundColor: '#333' }}>
            <Link to='/Home' style={linkStyle}>Home</Link> &nbsp;
            <Link to='/About' style={linkStyle}>About</Link>&nbsp;
            <Link to='/Contact' style={linkStyle}>Contact</Link>&nbsp;
            <Link to='/Product' style={linkStyle}>Products</Link>&nbsp;
        </div>
    );
}
