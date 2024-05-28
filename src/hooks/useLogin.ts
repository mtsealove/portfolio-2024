import { cookies } from 'next/headers';
import { useEffect } from 'react';

function useLogin() {
  useEffect(() => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken');
    // accessToken?.value;
  }, []);
}

export default useLogin;
