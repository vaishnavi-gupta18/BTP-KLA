import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navbar';
import Header from '../../components/header';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem, Typography, Button, InputAdornment } from '@mui/material';

import styles from './users.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';


const users = ["Worker1", "Manager1", "Worker2", "Worker3", "Worker4", "Manager2"]
const roles = ["Worker", "Supervisor", "Admin"]

const Users = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading="Manage Access"
        subheading="Manage all the users and their roles"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard heading="Roles and Access Control">
            <Stack direction="row" className={styles.top}>
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
              <Button size="small" variant="contained" sx={{ backgroundColor: "#00B000" }}>Add new member</Button>
            </Stack>
            <FormGroup>
              {users && users.map((user, key) => (
                <>
                  <Stack direction="row" className={styles.outer}>
                    <Stack direction="row" className={styles.role}>
                      <Typography>{user}</Typography>
                      <FormControl>
                        <Select
                          displayEmpty
                        >
                          {roles && roles.map((role, key) => (
                            <MenuItem value={role}>{role}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>
                    <Button size="small" variant="contained" color="error">Remove</Button>
                  </Stack>
                </>
              ))}
            </FormGroup>
          </FormCard>
        </div>
      </div >
    </>
  );
};

export default Users;
