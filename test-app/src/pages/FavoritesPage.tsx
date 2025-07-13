import { ProductCard } from '../components/ProductCard';
import { Spin } from 'antd';
import { useFavorites } from '../contexts/FavoritesContext';
import { useViewHistory } from '../contexts/ViewHistoryContext';

export function FavoritesPage() {
  const { favorites, toggleFavorite, isLoading, error } = useFavorites();
  const { viewedProducts, addToHistory } = useViewHistory();

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Spin tip="Đang tải sản phẩm..." size="large" />
        </div>
      ) : (
        <div className="py-6">
          <div className='container'>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {favorites.length === 0 ? (
              <p className="text-gray-400">Bạn chưa có sản phẩm yêu thích.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {favorites.map((f) => (
                  <ProductCard
                    key={f.id}
                    product={f}
                    onToggleFavorite={() => toggleFavorite(f)}
                    isLoading={isLoading}
                    isFavorite
                    onHistory={() => addToHistory(f)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
