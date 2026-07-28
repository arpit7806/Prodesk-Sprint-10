import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from './cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__image" />
      <div className="cart-item__details">
        <p className="cart-item__title">{item.title}</p>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
        <div className="cart-item__qty-controls">
          <button
            className="cart-item__qty-btn"
            onClick={() => dispatch(decrementQty(item.id))}
          >
            -
          </button>
          <span className="cart-item__qty">{item.qty}</span>
          <button
            className="cart-item__qty-btn"
            onClick={() => dispatch(incrementQty(item.id))}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="cart-item__remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
