
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!userName || !password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('/api/auth/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Login successful!');
                console.log(data);
                // Navigate to the CreatePost component
                navigate('/createpost');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Error logging in: ' + err.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>  
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
