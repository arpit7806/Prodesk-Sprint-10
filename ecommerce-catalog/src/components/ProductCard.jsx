import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-card__image" />
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__category">{product.category}</p>
      <p className="product-card__price">${product.price.toFixed(2)}</p>
      <button className="product-card__btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default memo(ProductCard);