import {useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormWrapper from './FormWrapper';
import { post } from '../api/requestApi';



//TODO Add error handling for registration form
//TODO Add a password confirmation field


 const RegisterForm = () => {
    const {login} = useContext(AuthContext);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const url = '/users/register';
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await post(url, formData);
            if (result) {
                login(result); //Updates context and localStorage
            }
            navigate('/');
            
        } catch (error) {
            console.log('The error is:', error);
            
        }
    };

    return (
        <FormWrapper title="Register">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                        className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Register
                </button>
            </form>
        </FormWrapper>
    );
};

export default RegisterForm;