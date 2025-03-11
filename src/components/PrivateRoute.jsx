import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("User:", user);// Debugging

  console.log("Loading:", loading);// Debugging

  if (loading) {
    return <Spinner/>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
