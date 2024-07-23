import { useEffect } from 'react';
import {
  getMe, refreshSignIn,
} from '@/api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/reducers/user';
import { getCookie } from 'cookies-next';
import { RootState } from '@/reducers';

function useLogin() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const refreshLogin = () => {
    const refreshToken = getCookie('refreshToken');
    if (refreshToken) {
      refreshSignIn(refreshToken)
        .then((data) => {
          const { accessToken } = data;
          window.sessionStorage.setItem('accessToken', accessToken);
          getMe().then((userData) => {
            dispatch(login(userData));
          });
        });
    }
  };
  useEffect(() => {
    getMe().then((data) => {
      dispatch(login(data));
    }).catch(() => {
      refreshLogin();
    });
  }, []);
  return user;
}

export default useLogin;
