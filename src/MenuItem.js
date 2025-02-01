import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, onAddToCart }) => {
    return (
        <div className="menu-item">
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.name} width={100} height={100} />
            <p className="price">${item.price.toFixed(2)}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    );
};

export default MenuItem;