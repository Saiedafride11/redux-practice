import React from 'react';

const Products = (props) => {
    const {addToCart , products} = props;
    return (
        <div style={{border : '1px solid tomato'}}>
            <h3>Products:- {products.name}</h3>
            <button onClick={ () => addToCart (products.id, products.name)}>Add to Cart</button>
        </div>
    );
};

export default Products;