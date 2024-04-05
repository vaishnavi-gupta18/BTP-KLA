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
  const [employeeId, setEmployeeId] = useState(null);
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      "employee_id": employeeId,
      "password": password
    }
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        if (res.success) {
          localStorage.setItem("isLoggedIn", true)
          localStorage.setItem("token", res.token)
          localStorage.setItem("role", res.role)
          navigate("/")
        }
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
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
              type="number"
              value={employeeId}
              onChange={(e) => { setEmployeeId(parseInt(e.target.value)) }}
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
              <Button variant="text" onClick={() => navigate("/reset")}>
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
