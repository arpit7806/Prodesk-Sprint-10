import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import CartItem from './CartItem';

function Cart({ isOpen, onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-panel__header">
          <h2>Your Cart</h2>
          <button className="cart-panel__close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-panel__empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-panel__items">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-panel__footer">
              <p className="cart-panel__total">Total: ${total.toFixed(2)}</p>
              <button
                className="cart-panel__clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;