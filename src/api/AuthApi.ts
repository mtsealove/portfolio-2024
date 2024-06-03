import { AxiosResponse } from 'axios';
import { User } from '@/models/auth';
import instance from './instance';

export interface ResSignIn {
    accessToken: string;
}

export function signIn(email: string, password: string): Promise<ResSignIn> {
  return instance.post('/auth/sign-in', { email, password });
}

export function setToken(token: string) {
  instance.defaults.headers.common.Authorization = `bearer ${token}`;
}

export function getMe(): Promise<User> {
  return instance.get('/auth/me');
}
