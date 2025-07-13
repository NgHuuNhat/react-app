import { createContext, useContext, useState } from 'react';
import { Product } from '../types/Product';

interface ViewHistoryContextType {
    viewedProducts: Product[];
    addToHistory: (product: Product) => void;
}

const ViewHistoryContext = createContext<ViewHistoryContextType | undefined>(undefined);

export function ViewHistoryProvider({ children }: { children: React.ReactNode }) {
    const [viewedProducts, setViewedProducts] = useState<Product[]>([]);

    const addToHistory = (product: Product) => {
        setViewedProducts((prev) => {
            if (prev.find((p) => p.productId === product.productId)) return prev;
            return [product, ...prev];
        });
    };

    return (
        <ViewHistoryContext.Provider value={{ viewedProducts, addToHistory }}>
            {children}
        </ViewHistoryContext.Provider>
    );
}

export function useViewHistory() {
    const context = useContext(ViewHistoryContext);
    if (!context) {
        throw new Error('useViewHistory must be used within ViewHistoryProvider');
    }
    return context;
}
