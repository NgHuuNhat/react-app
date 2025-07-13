import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { getFavorites, addFavorite, removeFavorite } from '../api/favoriteApi';

interface FavoritesContextProps {
    favorites: Product[];
    toggleFavorite: (product: Product) => void;
    isLoading: boolean;
    error: string;
}

const FavoritesContext = createContext<FavoritesContextProps | null>(null);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const fetchFavorites = async () => {
        try {
            setIsLoading(true);
            const fav = await getFavorites();
            setFavorites(fav);
            setError('');
        } catch {
            setError('Lỗi không thể lấy danh sách yêu thích. Vui lòng thử lại sau!');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleFavorite = async (product: Product) => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const exists = favorites.find((f) => f.productId === product.productId);
            if (exists) {
                await removeFavorite(exists.id);
            } else {
                await addFavorite(product);
            }
            await fetchFavorites();
        } catch {
            setError('Lỗi không thể cập nhật yêu thích. Vui lòng thử lại!');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isLoading, error }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
};
