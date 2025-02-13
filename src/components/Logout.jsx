import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { get } from '../api/requestApi';
import { clearUserData } from '../api/util';    


export default  function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const url = '/users/logout';


            try {
                const promise = await get(url);
                if (promise.status == 204) {
                    clearUserData();
                    navigate('/');
                } else {
                    const data = await promise.json();
                    throw new Error(data.message);
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