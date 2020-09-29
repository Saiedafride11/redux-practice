import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addToCart } from '../redux/action/cartAction';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd => <Products
                    products={pd}
                    key = {pd.id}
                    addToCart = {addToCart}
                    ></Products>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect ( mapStateToProps, mapDispatchToProps);
// connect ( mapStateToProps, mapDispatchToProps)(Shop)

export default connect ( mapStateToProps, mapDispatchToProps)(Shop);