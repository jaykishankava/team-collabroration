import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
 <div className="col-lg-6 col-12 col-md-12 mx-auto rounded ">
 <form onSubmit={handleSubmit} className='border m-3 p-3 rounded bg-secondary '>
      <h2 style={{textAlign:'center'}}>Login</h2>
      <input type="email" placeholder="Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='btn btn-primary'>Login</button>
    </form>
</div>
  );
};

export default Login;
