import React from 'react';
import './Cart.css';

const Cart = ({ items, onRemoveFromCart }) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h2>Your Order</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {items.map((item, index) => (
                        <div key={index} className="cart-item">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                            <button onClick={() => onRemoveFromCart(index)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <strong>Total: ${total.toFixed(2)}</strong>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;