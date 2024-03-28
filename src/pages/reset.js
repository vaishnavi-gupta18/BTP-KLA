import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styles from './reset.module.css';
import logo from '../assets/logo.svg';


const Reset = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <div className={styles.container}>
      <Box sx={{ width: { xs: "100%", sm: "50%" } }} className={styles.left}>
        <div className={styles.form}>
          <img src={logo} width="200px" height="56px" />
          <h1>Reset Password</h1>
          {!sent ? (
            <>
              <p>Enter your email address and we’ll send you an email with instructions to reset your password</p>
              <form>
                <InputLabel>Email</InputLabel>
                <TextField
                  id="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  fullWidth
                />
                <div className={styles.submit}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!email}
                    onClick={handleSubmit}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <TaskAltRoundedIcon sx={{ fontSize: 86, color: "#0048B2" }} />
              <p>
                A email has been send to your {email}.
                Please check for an email from company and click on the included link to reset your password.
              </p>
              <Button
                variant="contained"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </>
          )}

        </div>
      </Box>
      <Box sx={{ width: { sm: "50%" } }} className={styles.right}>
      </Box>
    </div >
  );
};

export default Reset;
