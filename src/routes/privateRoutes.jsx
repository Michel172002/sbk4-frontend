import useStorage from '../utils/useStorege';
import jwtDecode from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const [token, setToken, removeToken] = useStorage('token');

    if (token) {
        try {
            const decoded = jwtDecode(token)
            if (decoded && decoded.exp && Date.now() / 1000 < decoded.exp) {
                return <Outlet />;
            } else {
                removeToken();
            }
        } catch (error) {
            console.log("Error decoding token", error);
        }
    }

    return <Navigate to="/login" />;
};

export default PrivateRoutes;