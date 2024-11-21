import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Electronics() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilterProduct(data);
            })
    }, []);

    function sortByPrice(option) {
        setSortOption(option);

        let sorted = [...filterProduct];

        if (option === 'asc') {
            sorted = sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (option === 'desc') {
            sorted = sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
        setFilterProduct(sorted);
    };

    function Search(e) {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

        const filteredData = products.filter((item) => {
            return item.title.toLowerCase().includes(searchQuery);
        });

        setFilterProduct(filteredData);
    }

    const containerStyle = {
        padding: '20px',
    };

    const listStyle = {
        listStyleType: 'none',
        paddingLeft: '0',
        listStyle: "none"
    };

    const linkStyle = {
        color: 'green',
        fontSize: '18px',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <h1>Electronics</h1>
            <input type="text" value={query} onChange={Search} placeholder='Search Your Products' />
            &nbsp;&nbsp;&nbsp;

            <select onChange={(e) => sortByPrice(e.target.value)} value={sortOption}>
                <option value="default">Sort by price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select><br /><br />

            <ul style={listStyle}>
                {
                    filterProduct.map((el) => (
                        <li key={el.id}>
                            <Link to={`/ProductDetails/${el.id}`} style={linkStyle}>{el.title}</Link>
                            <h4 style={{ color: 'green' }}>Price: ${el.price}</h4><br /><br />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
