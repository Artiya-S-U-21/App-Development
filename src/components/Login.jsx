// import { Link, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import AuthService from './AuthService';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const[message,setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await AuthService.login({ email, password });
//             console.log('Response:', response);
//             if(response.data==='Login successful'){
//                 window.alert('Login Successful')
//                 navigate('/home');
//             } else {
//                 setMessage('Invalid credentials');
//             }
//         } catch (error) {
//             console.error("There was an error logging in!", error);
//         }
//     };

//     return (
//         <div className='back'>
//             <div className="login-container">
//                 <h2>Login</h2>
//                 {message && <div>{message}</div>}
//                 <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input 
//                             type="text" 
//                             id="email" 
//                             name="email" 
//                             required 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} 
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input 
//                             type="password" 
//                             id="password" 
//                             name="password" 
//                             required 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} 
//                         />
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//                 <p>Don't have an account? <Link to="/register">Register</Link></p>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from './AuthService';
import { useAuth } from './AuthContext'; // Import the custom hook
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth(); // Get auth action
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await AuthService.login({ email, password });
            console.log('Response:', response);
            if(response.data === 'Login successful'){
                login(); // Update context state
                window.alert('Login Successful');
                navigate('/'); // Redirect to homepage
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
        }
    };

    return (
        <div className='back'>
            <div className="login-container">
                <h2>Login</h2>
                {message && <div>{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
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
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
