import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

function Navbar({ onCartClick }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );
  const mode = useSelector((state) => state.theme.mode);

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">SHOPFRONT</h1>
      <div className="navbar__actions">
        <button className="navbar__theme-btn" onClick={() => dispatch(toggleTheme())}>
          {mode === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button className="navbar__cart-btn" onClick={onCartClick}>
          Cart
          {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;