import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup
  const [userData, setUserData] = useState(null); // To store user data during signup
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' }); // To store login data
  const [signupCredentials, setSignupCredentials] = useState({ name: '', email: '', password: '', confirmPassword: '' }); // To store signup data

  const navigate = useNavigate(); // To navigate to the home page after successful login

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // If the password and confirm password match
    if (signupCredentials.password !== signupCredentials.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Store user data (In a real app, this would be saved in a database)
    setUserData({
      email: signupCredentials.email,
      password: signupCredentials.password,
    });

    // Clear form fields after successful signup
    setSignupCredentials({ name: '', email: '', password: '', confirmPassword: '' });
    alert('Signup successful! Please log in.');
    setIsLogin(true); // Switch to login page
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check if the entered login credentials match the stored user data
    if (userData && userData.email === loginCredentials.email && userData.password === loginCredentials.password) {
      alert('Login successful!');
      navigate('/'); // Navigate to the home page on successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-4 p-5" style={{ backgroundColor: '#f8f9fa' }}>
            <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>

            {/* Login Form */}
            {isLogin ? (
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={loginCredentials.email}
                    onChange={handleLoginChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={loginCredentials.password}
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill shadow-sm">Login</button>
              </form>
            ) : (
              // Signup Form
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={signupCredentials.name}
                    onChange={handleSignupChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={signupCredentials.email}
                    onChange={handleSignupChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={signupCredentials.password}
                    onChange={handleSignupChange}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={signupCredentials.confirmPassword}
                    onChange={handleSignupChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill shadow-sm">Sign Up</button>
              </form>
            )}

            {/* Toggle Between Login and Signup */}
            <div className="text-center mt-3">
              <p>
                {isLogin ? (
                  <span>Don't have an account? <button className="btn btn-link p-0" onClick={handleToggle}>Sign up here</button></span>
                ) : (
                  <span>Already have an account? <button className="btn btn-link p-0" onClick={handleToggle}>Login here</button></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
