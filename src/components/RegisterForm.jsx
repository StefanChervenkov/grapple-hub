import {useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { post } from '../api/requestApi';
import FormWrapper from './FormWrapper';
import ErrorMessage from './ErrorMessage';



//TODO Add error handling for registration form
//TODO Add a password confirmation field


 const RegisterForm = () => {
     const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
     const [error, setError] = useState(null);
     const {login} = useContext(AuthContext);
     const url = '/users/register';
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return; 
        }
        if (Object.values(formData).some((field) => field === '')) {
            setError('Please fill out all fields');
            return;
            
        }

        try {
            const result = await post(url, formData);
            if (result) {
                login(result); //Updates context and localStorage
            }
            navigate('/');
            
        } catch (error) {
            setError(error.message);
            
        }
    };

    return (
        <FormWrapper title="Register">
            {error && <ErrorMessage message={error} />}
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