import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AuthService from './AuthService';
import './Register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await AuthService.register({ firstName, lastName, email, password });
            console.log(response);
            if (response.status === 200 ) {
                window.alert('Registration successful!');
                navigate('/login');
            } else {
                setMessage(response.data);
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                window.alert('Registration failed!');
            }
        }
    };

    return (
        <div className='back'>
            <div className="register-container">
                <h2>Register</h2>
                {message && <div className="message">{message}</div>}
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            required 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            required 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
