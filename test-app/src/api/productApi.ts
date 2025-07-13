import axios from 'axios';
import { Product } from '../types/Product';

const PRODUCT_API = 'https://68733eb7c75558e27353acf0.mockapi.io/api/product';

export const getProducts = async (): Promise<Product[]> => {
    const res = await axios.get(PRODUCT_API);
    return res.data;
};
