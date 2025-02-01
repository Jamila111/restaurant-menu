import React from 'react';
import './Navbar.css';

const Navbar = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <nav className="navbar">
            <h1>Restaurant Menu</h1>
            <div className="categories">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`categorffy-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;