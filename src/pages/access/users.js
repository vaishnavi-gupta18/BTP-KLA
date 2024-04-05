import React, { useState, useEffect } from "react";
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
import { Select, MenuItem, Typography, Button, InputAdornment, CircularProgress } from '@mui/material';

import styles from './users.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';


const roles = ["ADMIN", "SUPERVISOR", "WORKER"]

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/admin/employee/fetch", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        setUsers(res.data)
        setLoading(false)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const removeUsers = async (id) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/admin/employee/delete/" + id, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        setUsers(res.data)
        setLoading(true)
        fetchUsers()
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, []);

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
              <Button size="small" variant="contained" sx={{ backgroundColor: "#00B000" }} onClick={() => navigate("/createuser")}>Add new member</Button>
            </Stack>
            <FormGroup>
              {loading && <CircularProgress />}
              {users && users.length > 1 && users.map((user, key) => (
                <>
                  <Stack direction="row" className={styles.outer}>
                    <Stack direction="row" className={styles.role}>
                      <Typography>{user.name}</Typography>
                      <FormControl>
                        <Select defaultValue={user.role}>
                          {roles && roles.map((role, key) => (
                            <MenuItem value={role}>{role}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Stack>
                    <Button size="small" variant="contained" color="error" onClick={() => removeUsers(user.employee_id)}>Remove</Button>
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
