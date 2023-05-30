import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Header from '../Basic-Compo/Header';
import Footer from '../Basic-Compo/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const [productList, setProductList] = useState([]);
  const ProductAPiUrl = 'http://localhost:3005/api/product';
  const fetchProductApi = async () => {
    const response = await axios(ProductAPiUrl);
    console.log(response.data);
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProductApi();
  }, []);

  return (
    <>
      
      <div className='Home'>
        {productList.map((data) => (
          <div className='product-card' key={data.id}>
            <div className='product-image'>
              <img src={data.url} alt='Product' />
            </div>
            <div className='product-details'>
              <h2>{data.name}</h2>
              <p>{data.type}</p>
             <button className='buy-button'> <Link to={`/product/${data.id}/${data.name}/${data.type}`} >Buy</Link></button>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Home;
