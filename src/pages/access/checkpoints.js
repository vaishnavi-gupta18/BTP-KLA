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
import { Select, MenuItem, Typography, Button, InputLabel } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './checkpoints.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';
import checkpoints from '../../assets/checkpoints.svg';


const users = ["Worker1", "Manager1", "Worker2", "Worker3", "Worker4", "Manager2"]
const roles = ["Worker", "Supervisor", "Admin"]
const data = [
  {
    "checkpoint": "Checkpoint name",
    "assigned_to": "Name of assigned",
    "manager": "John Doe",
  },
  {
    "checkpoint": "Checkpoint name",
    "assigned_to": "Name of assigned",
    "manager": "John Doe",
  },
  {
    "checkpoint": "Checkpoint name",
    "assigned_to": "Name of assigned",
    "manager": "John Doe",
  },
  {
    "checkpoint": "Checkpoint name",
    "assigned_to": "Name of assigned",
    "manager": "John Doe",
  },
]

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
          <FormCard heading="Checkpoint Plan Viewer">
            <img src={checkpoints} width="100%" />
          </FormCard>
          <FormCard heading="Checkpoint Assignment">
            <TableContainer>
              <Table class>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow
                      key={index}
                    >
                      <TableCell>{row.checkpoint}</TableCell>
                      <TableCell>{row.assigned_to}</TableCell>
                      <TableCell>Under the direct management of {row.manager}</TableCell>
                      <TableCell sx={{ textAlign: "right" }}><Button size="small" variant="contained" color="error">Remove</Button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button size="small" variant="contained" sx={{ backgroundColor: "#00B000" }}>Add new checkpoint</Button>
          </FormCard>
        </div>
      </div >
    </>
  );
};

export default Users;
