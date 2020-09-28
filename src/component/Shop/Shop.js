import React from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const products = [
        {name: 'lenevo' , id: 1},
        {name: 'Asus' , id: 2},
        {name: 'Dell' , id: 3},
        {name: 'Hp' , id: 4},
        {name: 'Toshiba' , id: 5}
    ]
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd => <Products products={pd}></Products>)
            }
        </div>
    );
};

export default Shop;