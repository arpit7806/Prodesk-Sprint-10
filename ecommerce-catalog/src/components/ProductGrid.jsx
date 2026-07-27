import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category, minPrice, maxPrice } = useSelector((state) => state.filters);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  if (loading) return <p className="grid-status">Loading products...</p>;
  if (error) return <p className="grid-status grid-status--error">{error}</p>;
  if (filteredProducts.length === 0)
    return <p className="grid-status">No products match your filters.</p>;

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;