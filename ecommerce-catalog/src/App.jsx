import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Sidebar from './features/filters/Sidebar';
import ProductGrid from './components/ProductGrid';
import Cart from './features/cart/Cart';
import './index.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const mode = useSelector((state) => state.theme.mode);
  console.log('mode:', mode);

  return (
    <div className={`app app--${mode}`}>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <div className="app__layout">
        <Sidebar />
        <main className="app__main">
          <ProductGrid />
        </main>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;