import { useState } from 'react';
import FormWrapper from './FormWrapper';
import { post } from '../api/requestApi';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../api/util';

//Error handling on the client for login form
//TODO create custom hook for form handling
//TODO persist auth state in local storage

//TODO the above step can be done using context API so I can avoid prop drilling (createcontext())


const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const url = '/users/login';
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result =  await post(url, formData);
            if (result) {
                setUserData({
                    accessToken: result.accessToken,
                    email: result.email,
                    userId: result._id
                })
            }
            navigate('/');

        }

        catch (error) {
            console.log('The error is:', error);
        }


    };

    return (
        <FormWrapper title="Login">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>
        </FormWrapper>
    );
};



export default LoginForm;
