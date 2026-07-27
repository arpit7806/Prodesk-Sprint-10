import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setPriceRange, resetFilters } from './filtersSlice';

const CATEGORIES = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

function Sidebar() {
  const dispatch = useDispatch();
  const { category, minPrice, maxPrice } = useSelector((state) => state.filters);

  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Filters</h3>

      <div className="sidebar__section">
        <p className="sidebar__label">Category</p>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`sidebar__category-btn ${category === cat ? 'sidebar__category-btn--active' : ''}`}
            onClick={() => dispatch(setCategory(cat))}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sidebar__section">
        <p className="sidebar__label">Price Range</p>
        <div className="sidebar__price-inputs">
          <input
            type="number"
            className="sidebar__price-input"
            value={minPrice}
            min="0"
            onChange={(e) =>
              dispatch(setPriceRange({ min: Number(e.target.value), max: maxPrice }))
            }
          />
          <span className="sidebar__price-separator">to</span>
          <input
            type="number"
            className="sidebar__price-input"
            value={maxPrice}
            min="0"
            onChange={(e) =>
              dispatch(setPriceRange({ min: minPrice, max: Number(e.target.value) }))
            }
          />
        </div>
      </div>

      <button className="sidebar__reset-btn" onClick={() => dispatch(resetFilters())}>
        Reset Filters
      </button>
    </aside>
  );
}

export default Sidebar;