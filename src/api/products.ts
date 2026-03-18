import api from './axios';
import { ProductsResponse } from '@/types';

export const getProducts = async (limit: number = 12): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>('/products', {
    params: { limit },
  });
  return data;
};
