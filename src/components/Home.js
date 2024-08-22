import React from 'react';
import './home.css';
import { productsData } from '../data/productsData';
import ProductCard from './ProductCart';
const Home = () => {
  return (
    <div className="home-container">
      <h2>Shoe Collections - 2k24</h2>
      <div className="grid-container">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;