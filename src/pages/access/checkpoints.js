import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navbar';
import Header from '../../components/header';
import { CircularProgress, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './checkpoints.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';
import checkpoint_map from '../../assets/checkpoints.svg';


const users = ["Worker1", "Manager1", "Worker2", "Worker3", "Worker4", "Manager2"]
const roles = ["Worker", "Supervisor", "Admin"]

const Checkpoints = () => {
  const navigate = useNavigate();
  const [checkpoints, setCheckpoints] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCheckpoints = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/admin/checkpoint/fetch", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        setCheckpoints(res.data)
        setLoading(false)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCheckpoints()
  }, []);

  return (
    <>
      <Header
        heading="Manage Access"
        subheading="Manage all the users and their roles"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard heading="Checkpoint Plan Viewer">
            <img src={checkpoint_map} width="100%" />
          </FormCard>
          <FormCard heading="Checkpoint Assignment">
            <TableContainer>
              <Table class>
                <TableBody>
                  {loading && <CircularProgress />}
                  {checkpoints && checkpoints.map((checkpoint, index) => (
                    <TableRow
                      key={index}
                    >
                      <TableCell>{checkpoint.checkpoint_name.replace(/_/g, " ")}</TableCell>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Under the direct management of John Doe</TableCell>
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

export default Checkpoints;
