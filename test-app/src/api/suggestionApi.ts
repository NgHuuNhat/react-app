import { Product } from '../types/Product';

export const suggestions = [
    {
        id: 'suggest-1',
        productId: 's1',
        name: 'Sản phẩm AI 1',
        price: 999,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+1',
    },
    {
        id: 'suggest-2',
        productId: 's2',
        name: 'Sản phẩm AI 2',
        price: 1500,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+2',
    },
    {
        id: 'suggest-3',
        productId: 's3',
        name: 'Sản phẩm AI 3',
        price: 200,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+3',
    },
    {
        id: 'suggest-4',
        productId: 's4',
        name: 'Sản phẩm AI 4',
        price: 750,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+4',
    },
    {
        id: 'suggest-5',
        productId: 's5',
        name: 'Sản phẩm AI 5',
        price: 3000,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+5',
    },
    {
        id: 'suggest-6',
        productId: 's6',
        name: 'Sản phẩm AI 6',
        price: 450,
        description: 'Đây là sản phẩm AI đề xuất cho bạn',
        image: 'https://placehold.co/400x300?text=AI+6',
    },
];

export const getSuggestions = async (userId: string): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(suggestions);
        }, 0);
    });
};
