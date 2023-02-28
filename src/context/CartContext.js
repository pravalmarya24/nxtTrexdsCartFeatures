import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  cartItemQuantity: '',
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
