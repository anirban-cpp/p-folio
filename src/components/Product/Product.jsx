import React from 'react';

import './Product.css';

const Product = ({img,link}) => {
    console.log(img);
    console.log(link);
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="blank" rel="noreference">
                <img src={img} alt="" className='p-img'/>
            </a>
        </div>
    )
}

export default Product
