import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartAction";



const initialState = {
   cart : [],
   products : [
    {name: 'lenevo' , id: 1},
    {name: 'Asus' , id: 2},
    {name: 'Dell' , id: 3},
    {name: 'Hp' , id: 4},
    {name: 'Toshiba' , id: 5}
   ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART :
            const newItem = {
                productsId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART :
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart};

        default :
            return state;
    }
}

export default cartReducers