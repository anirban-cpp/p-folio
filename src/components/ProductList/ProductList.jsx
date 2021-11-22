import React from 'react';
import Product from '../Product/Product';

import { products } from '../../Data';
import './ProductList.css';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire.</h1>
                <p className='pl-desc'>
                    Check out some of my works
                </p>
            </div>
            <div className="pl-list">
                {
                    products?.map(item => (
                        <Product 
                            key={item.id}
                            img={item.img}
                            link={item.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
