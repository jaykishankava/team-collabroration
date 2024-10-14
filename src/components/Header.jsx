import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/register')
  };

  return (
    <header className="header bg-info ">
      <h2 className='ms-3 mt-3' style={{textAlign:'start', }}>Team-collaboration app </h2>
      {user ? (
        <div>
          <span>Welcome, {user.email}</span>
          <button className='btn btn-dark btn-sm' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='justify-content-end d-flex'>
          <Link className='btn btn-success' to="/login">Login</Link>
          <Link className='btn ms-2 btn-secondary' to="/register">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
