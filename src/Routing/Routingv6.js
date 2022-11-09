import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default function Routingv6() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="dashboard/home" element={<Home />} />
            <Route path="dashboard/about" element={<About />} />
            <Route path="dashboard/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
