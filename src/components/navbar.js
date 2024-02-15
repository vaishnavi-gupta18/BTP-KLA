import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import styles from './navbar.module.css';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.actions}>
        <div className={styles.left}>
          <TextField
            variant="outlined"
            placeholder='Search...'
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.right}>
          <NotificationsIcon sx={{ color: grey[500] }} />
          <EmailIcon sx={{ color: grey[500] }} />
          <div className={styles.user}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Vaishnavi Gupta" src="/static/images/avatar/1.jpg" />
              <Stack direction="column">
                <div className={styles.userName}>Vaishnavi Gupta</div>
                <div className={styles.designation}>Marketing Administrator</div>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
