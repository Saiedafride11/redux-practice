import React from 'react';

const Products = (props) => {
    const {name , id} = props.products;
    return (
        <div style={{border : '1px solid tomato'}}>
            <h3>Products:- {name}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default Products;