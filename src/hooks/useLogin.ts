import { cookies } from 'next/headers';
import { useEffect } from 'react';
import { setToken, signIn, getMe } from '@/api/AuthApi';
import { useDispatch } from 'react-redux';
import { login } from '@/reducers/user';

function useLogin() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    // accessToken?.value;
    if (accessToken?.value) {
      setToken(accessToken.value);
      getMe().then((user) => {
        dispatch(login(user));
      });
    }
  }, []);
}

export default useLogin;
