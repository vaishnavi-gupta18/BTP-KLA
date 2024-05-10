import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import NavBar from './components/navbar';
import Sidebar from './components/sidebar';
import PrivateRoute from './pages/privateRoute';
import Login from './pages/login';
import Reset from './pages/reset';
import CreateUser from './pages/createUser';
import Product from './pages/formLayouts/product';
import Dashboard from './pages/dashboard'
import Blanching from './pages/formLayouts/blanching';
import ProcessingQuality from './pages/formLayouts/processingQuality';
import ProcessParameter from './pages/formLayouts/processParameter';
import PurchaseRegister from './pages/formLayouts/purchaseRegister';
import IncomingRaw from './pages/formLayouts/incomingRaw';
import IncomingRawForm from './pages/formLayouts/incomingRawForm';
import FinishedProduct from './pages/formLayouts/finishedProduct';
import DailyProduction from './pages/formLayouts/dailyProduction';
import Users from './pages/access/users';
import Checkpoints from './pages/access/checkpoints';
import Profile from './pages/profile';
import PendingRequests from './pages/requests/pendingRequests';
import PreviousRequests from './pages/requests/previousRequests';
import NewRequest from './pages/requests/newRequest';
import NewForm from './pages/forms/newForm';
import PendingForms from './pages/forms/pendingForms';
import CompleteForms from './pages/forms/completeForms';
import IncomingRawAll from './pages/formLayouts/incomingRawAll';
import ColdStorage from './pages/formLayouts/coldStorage';

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

const Layout = () => {
  const auth = localStorage.getItem("isLoggedIn")
  return (
    <>
      {
        auth ? (
          <div className={styles.container} >
            <NavBar />
            <div className={styles.outer}>
              <Sidebar />
              <div className={styles.content}>
                <Outlet />
              </div>
            </div>
          </div >
        ) : (
          <Navigate to="/login" />
        )}
    </>
  )
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/checkpoints" element={<Checkpoints />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pending-requests" element={<PendingRequests />} />
            <Route path="/previous-requests" element={<PreviousRequests />} />
            <Route path="/new-request" element={<NewRequest />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blanching" element={<Blanching />} />
            <Route path="/processing-quality" element={<ProcessingQuality />} />
            <Route path="/process-parameter" element={<ProcessParameter />} />
            <Route path="/purchase-register" element={<PurchaseRegister />} />
            <Route path="/incoming-raw" element={<IncomingRawForm />} />
            <Route path="/incoming-raw/:checkpointId/:type/:date" element={<IncomingRaw />} />
            <Route path="/incoming-raw-all" element={<IncomingRawAll />} />
            <Route path="/finished-product" element={<FinishedProduct />} />
            <Route path="/daily-production" element={<DailyProduction />} />
            <Route path="/cold-storage" element={<ColdStorage />} />
            <Route path="/new-form" element={<NewForm />} />
            <Route path="/pending-forms" element={<PendingForms />} />
            <Route path="/complete-forms" element={<CompleteForms />} />
          </Route>
        </Routes>
      </Router>
    </StyledEngineProvider >
  );
}

export default App;
