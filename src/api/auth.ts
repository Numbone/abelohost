import api from './axios';
import { AuthResponse, LoginCredentials } from '@/types';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/auth/login', credentials);
  return data;
};
