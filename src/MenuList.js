import React from 'react';
import MenuItem from './MenuItem';
import './MenuList.css';

const MenuList = ({ items, activeCategory, onAddToCart }) => {
    const filteredItems = activeCategory === 'All'
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <div className="menu-list">
            <h2>{activeCategory} Menu</h2>
            <div className="menu-items">
                {filteredItems.map(item => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        onAddToCart={() => onAddToCart(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuList;