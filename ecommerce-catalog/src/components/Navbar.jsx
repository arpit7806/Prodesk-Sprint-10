import { useSelector } from 'react-redux';

function Navbar({ onCartClick }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">SHOPFRONT</h1>
      <button className="navbar__cart-btn" onClick={onCartClick}>
        Cart
        {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
      </button>
    </nav>
  );
}

export default Navbar;