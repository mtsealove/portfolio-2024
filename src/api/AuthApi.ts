import { User } from '@/models/auth';
import instance from './instance';

export interface ResSignIn {
    accessToken: string;
    refreshToken: string;
}

export function signIn(email: string, password: string): Promise<ResSignIn> {
  return instance.post('/auth/sign-in', { email, password });
}

export function refreshSignIn(refreshToken: string): Promise<ResSignIn> {
  return instance.post('/auth/sign-in/refresh', { refreshToken });
}

export function getMe(): Promise<User> {
  return instance.get('/auth/me');
}
