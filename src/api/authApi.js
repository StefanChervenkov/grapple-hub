export default function authApi() {
    const login = async (credentials) => {  // credentials is an object containing email and password
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            return await response.json();
        } catch (error) {
            console.error('Login Error:', error);
        }
    }
    
    
    
    
    return (
        {login, }
    )
    }