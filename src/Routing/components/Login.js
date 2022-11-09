import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/home');
  // }, [login]);

  const handleLogin = () => {
    setLogin(true);
    navigate('dashboard/home');
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}> Login </button>
      <Outlet />
    </>
  );
}
