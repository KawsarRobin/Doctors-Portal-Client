import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const useAuth = () => {
  const useAuth = useContext(AuthContext);
  return useAuth;
};

export default useAuth;
