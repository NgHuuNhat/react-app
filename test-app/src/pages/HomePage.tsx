import { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';
import { Product } from '../types/Product';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { FilterSidebar } from '../components/FilterSidebar';
import { Spin } from 'antd';
import { useFavorites } from '../contexts/FavoritesContext';
import { useViewHistory } from '../contexts/ViewHistoryContext';

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<'all' | '<500' | '500-1000' | '>1000'>('all');
    const { favorites, toggleFavorite, isLoading } = useFavorites();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
    const [isSuggestion, setIsSuggestion] = useState(false);
    const { addToHistory } = useViewHistory();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(setProducts)
            .catch(() => setError('Lỗi khi tải danh sách sản phẩm. Vui lòng thử lại sau!'))
            .finally(() => setLoading(false));
    }, []);

    const filteredProducts = isSuggestion ? suggestedProducts : products.filter((p) => {
        const normalize = (text: string) => text.toLowerCase().trim().replace(/\s/g, '');
        const matchesSearch = normalize(p.name).includes(normalize(search));
        const matchesFilter =
            filter === 'all' ||
            (filter === '<500' && p.price < 500) ||
            (filter === '500-1000' && p.price >= 500 && p.price <= 1000) ||
            (filter === '>1000' && p.price > 1000);
        return matchesSearch && matchesFilter;
    });

    return (
        <>
            {
                loading ? (
                    <div className="flex justify-center items-center h-96">
                        <Spin tip="Đang tải sản phẩm..." size="large" />
                    </div>
                ) : (
                    <div className='py-6'>
                        <div className="container">
                            <SearchBar search={search} setSearch={setSearch} />
                            <FilterSidebar filter={filter} setFilter={setFilter} setProducts={setProducts} setSuggestedProducts={setSuggestedProducts} setIsSuggestion={setIsSuggestion} />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                                {error && <p className="text-red-500 mb-4">{error}</p>}
                                {filteredProducts.map((p) => (
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
                        </div>
                    </div>
                )
            }
        </>
    );
}
