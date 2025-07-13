import { useViewHistory } from '../contexts/ViewHistoryContext';
import { ProductCard } from '../components/ProductCard';
import { Spin } from 'antd';
import { useFavorites } from '../contexts/FavoritesContext';

export function ViewHistoryPage() {
    const { viewedProducts, addToHistory } = useViewHistory();
    const { toggleFavorite, favorites, isLoading } = useFavorites();

    return (
        <div className="py-6">
            <div className="container">
                {viewedProducts.length === 0 ? (
                    <p className="text-gray-400">Bạn chưa xem sản phẩm nào.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        {viewedProducts.map((p) => (
                            <ProductCard
                                key={p.id}
                                product={p}
                                onToggleFavorite={() => toggleFavorite(p)}
                                isLoading={isLoading}
                                isFavorite={favorites.some((f) => f.productId === p.productId)}
                                onHistory={() => addToHistory(p)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
