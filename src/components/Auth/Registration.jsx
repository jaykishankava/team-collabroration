import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, email, password);
    navigate('/login'); // Redirect to login after registration
  };

  return (
   <div className="col-lg-6 col-12 col-md-12 mx-auto rounded ">
     <form  onSubmit={handleSubmit} className='border m-3 p-3 rounded bg-secondary '>
      <h2>Register</h2>
      <input type="text" className='form-control' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" className='form-control' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" className='form-control' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='btn btn-primary'>Register</button>
    </form>
   </div>
  );
};

export default Registration;
