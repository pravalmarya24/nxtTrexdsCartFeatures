import CartContext from '../../context/CartContext'
import './index.css'

// Write your code here
const CartSummary = () => (
  <CartContext>
    {value => {
      const {cartList} = value
      const {price} = cartList[0]
      const cartListLength = cartList.length
      console.log(cartList[0].price)

      return (
        <div className="cart-summary-container">
          <div className="total-price-container">
            <p className="order-total-para">Order Total:</p>
            <p className="cart-summary-price-para">{`Rs ${price}/-`}</p>
          </div>
          <p className="total-cart-item-para">{`${cartListLength} Items in cart`}</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext>
)

export default CartSummary
