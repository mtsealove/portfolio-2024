import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

function useUser() {
  const user = useSelector((state: RootState) => state.user);
  return user.user;
}

export default useUser;
