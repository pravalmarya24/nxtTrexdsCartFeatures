import CartContext from '../../context/CartContext'
import './index.css'

// Write your code here
const CartSummary = () => (
  <CartContext>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      const cartListLength = cartList.length

      return (
        <div className="cart-summary-container">
          <div className="total-price-container">
            <h1 className="order-total-para">Order Total:</h1>
            <p className="cart-summary-price-para">{`Rs ${total}/-`}</p>
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
