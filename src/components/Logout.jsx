import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { get } from '../api/requestApi';




export default function Logout() {
    const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
        
        const logoutUser = async () => {
            const url = '/users/logout';
            try {
                const promise = await get(url);

                if (promise.status == 204) {

                    logout();
                    navigate('/');

                }
            }
            catch (error) {
                console.log('The error is:', error);
            }
        }

        logoutUser();


    }, []);




    return null;
}