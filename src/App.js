import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Login from './pages/login';
import Home from './pages/home';
import CreateUser from './pages/createUser';
import Product from './pages/product';
import Dashboard from './pages/dashboard'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
