import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const menuCategories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const menuItems = [
    { id: 1, name: 'Caesar Salad',
      img: 'https://cookieandkate.com/images/2021/05/homemade-caesar-salad.jpg',
      price: 8.99, category: 'Starters' },
    { id: 2, name: 'Garlic Bread',
      img: 'https://www.jessicagavin.com/wp-content/uploads/2018/11/garlic-bread-8-1200.jpg',
      price: 4.99, category: 'Starters' },
    { id: 3, name: 'Grilled Salmon',
      img: 'https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg',
      price: 22.99, category: 'Main Course' },
    { id: 4, name: 'Spaghetti Carbonara',
      img: 'https://fthmb.tqn.com/AmtBki2yVYtxFyDoH6PpU6-RYag=/3888x2592/filters:fill(auto,1)/italian-food--pasta-alla-carbonara-111648900-5a4fd617ec2f640037f8cf3d.jpg',
      price: 16.99, category: 'Main Course' },
    { id: 5, name: 'Chocolate Cake',
      img: 'https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0968.jpg',
      price: 6.99, category: 'Desserts' },
    { id: 6, name: 'Ice Cream Sundae',
      img: 'https://i.pinimg.com/originals/ac/4b/f4/ac4bf469b39fb16ff8d86bcee355d360.jpg',
      price: 5.99, category: 'Desserts' },
    { id: 7, name: 'Coca Cola',
      img: 'https://oldintim.ro/wp-content/uploads/2020/05/cocacola_250-min.jpg',
      price: 2.99, category: 'Beverages' },
    { id: 8, name: 'Lemonade',
      img: 'http://2.bp.blogspot.com/-pgJRAckNquw/UDJT3BHFU7I/AAAAAAAAA7E/K9eaZ437dYI/s1600/glass%2Blemonade%2B2.JPG',
      price: 2.49, category: 'Beverages' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
      <div className="app">
        <Navbar
            categories={menuCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
        />
        <div className="main-content">
          <MenuList
              items={menuItems}
              activeCategory={activeCategory}
              onAddToCart={addToCart}
          />
          <Cart
              items={cart}
              onRemoveFromCart={removeFromCart}
          />
        </div>
      </div>
  );
};

export default App;
