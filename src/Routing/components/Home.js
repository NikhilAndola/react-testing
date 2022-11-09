import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Home</h2>
      <Link to="/dashboard/about">About</Link>
      <Link to="/dashboard/contact">Contact</Link>
    </div>
  );
}
