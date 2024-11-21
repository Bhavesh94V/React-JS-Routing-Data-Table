import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Product() {

    const containerStyle = {
        padding: '20px',
    };

    const linkContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    };

    const linkStyle = {
        color: 'blue',
        fontSize: '18px',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <div style={linkContainerStyle}>
                <Link to='Electronics' style={linkStyle}>Electronics</Link>
                <Link to='Jewellery' style={linkStyle}>Jewellery</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
