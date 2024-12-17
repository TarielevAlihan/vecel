import React, { useState } from 'react';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (email && password) {
     
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('User registered successfully!');
      onRegister();  
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
