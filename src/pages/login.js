import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styles from './login.module.css';
import logo from '../assets/logo.svg';


const Login = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      "employee_id": employeeId,
      "password": password
    }
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${idToken}`,
      // },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw response;
      }
      navigate("/")
      return response.json();
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className={styles.container}>
      <Box sx={{ width: { xs: "100%", sm: "50%" } }} className={styles.left}>
        <div className={styles.form}>
          <img src={logo} width="200px" height="56px" />
          <h1>Sign In</h1>
          <form>
            <InputLabel>Employee ID</InputLabel>
            <TextField
              id="employee-id"
              variant="outlined"
              value={employeeId}
              onChange={(e) => { setEmployeeId(e.target.value) }}
              fullWidth
            />
            <InputLabel>Password</InputLabel>
            <TextField
              id="password"
              variant="outlined"
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              fullWidth />
            <div className={styles.options}>
              <div className={styles.remember}>
                <FormControlLabel
                  control={<Checkbox
                    checked={remember}
                    onChange={(e) => { setRemember(e.target.value) }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />}
                  label="Remember me?" />
              </div>
              <Button variant="text">
                Forgot Password
              </Button>
            </div>
            <div className={styles.submit}>
              <Button
                variant="contained"
                type="submit"
                disabled={!employeeId || !password}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </Box>
      <Box sx={{ width: { sm: "50%" } }} className={styles.right}>
      </Box>
    </div>
  );
};

export default Login;
