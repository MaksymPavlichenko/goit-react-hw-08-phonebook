import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { getToken } from 'Redux/Auth/AuthSelectors';

export default function PrivateRoute({ children }) {
    const token = useSelector(getToken);
    return token ? children : <Navigate to="/login" />
}