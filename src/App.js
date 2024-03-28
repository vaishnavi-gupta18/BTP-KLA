import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import Login from './pages/login';
import Reset from './pages/reset';
import CreateUser from './pages/createUser';
import Product from './pages/product';
import Dashboard from './pages/dashboard'
import Blanching from './pages/blanching';

import styles from './App.module.css'

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

const Layout = () => (
  <div className={styles.container}>
    <NavBar />
    <div className={styles.outer}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  </div>
)

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blanching" element={<Blanching />} />
          </Route>
        </Routes>
      </Router>
    </StyledEngineProvider >
  );
}

export default App;
