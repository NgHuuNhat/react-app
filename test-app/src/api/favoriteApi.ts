import axios from 'axios';
import { Product } from '../types/Product';

const FAVORITE_API = 'https://68733eb7c75558e27353acf0.mockapi.io/api/favorite';

export const getFavorites = async (): Promise<Product[]> => {
  const res = await axios.get(FAVORITE_API);
  return res.data;
};

export const addFavorite = async (product: Product) => {
  return axios.post(FAVORITE_API, product);
};

export const removeFavorite = async (id: string) => {
  return axios.delete(`${FAVORITE_API}/${id}`);
};
