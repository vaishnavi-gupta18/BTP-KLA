import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { Snackbar, Button, InputLabel, Select, MenuItem } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import styles from './coldStorage.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";


const ColdStorage = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [data, setData] = useState({
    "batch_code": "",
    "number_of_sub_batches": "",
    "weight_of_each_sub_batch": ""
  })
  const [assignment, setAssignment] = useState({})
  const [details, setDetails] = useState([
    "ABCD/XXX/1",
    "ABCD/XXX/2",
    "ABCD/XXX/3"
  ])
  const [success, setSuccess] = useState("")
  const [Emptyerror, setEmptyError] = useState(false)
  const [Doneerror, setDoneError] = useState(false)

  const fetchBatches = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/worker/fetch-active-batches", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        console.log(res)
        setBatches(res.data)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (event) => {
    let type = event.target.type
    let value = event.target.value;
    let name = event.target.name;

    if (name == "batch_code" || name == "weight_of_each_sub_batch" || name == "number_of_sub_batches") {
      if (name != "batch_code")
        value = parseInt(value)
      setData((preval) => {
        return {
          ...preval,
          [name]: value,
        }
      })
    }
    else {
      value = parseInt(value)
      setAssignment((preval) => {
        return {
          ...preval,
          [name]: value,
        }
      })
    }
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")

    let newData = {
      "batch_code": data.batch_code,
      "cold_storage_assignments": []
    }

    Object.keys(assignment).forEach(function eachKey(key) {
      newData.cold_storage_assignments.push({
        "sub_batch_code": key,
        "cold_storage_unit": assignment[key]
      })
    });

    try {
      const response = await fetch("http://localhost:8080/api/worker/assign-cold-storage", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
      })

      const res = await response.json();
      if (response.status == 200) {
        setSubmitted(true)
        setSuccess(res)
      }
      else {
        setDoneError(true)
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      setDoneError(true)
      console.log(error)
    }
  }

  const generateSubBatch = async (e) => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/worker/generate-sub-batch", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        setDetails(res.data)
        setGenerated(true)
      }
      else {
        setDoneError(true)
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      setDoneError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBatches()
  }, []);

  return (
    <>
      <Header
        heading="Cold Storage"
        subheading="Data entry for cold storage allocation"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Batch Details">
                <div className={styles.field}>
                  <InputLabel>Batch Code</InputLabel>
                  <Select
                    sx={{ width: "50%" }}
                    name="batch_code"
                    onChange={handleChange}
                  >
                    {batches && batches.map((batch, key) => (
                      <MenuItem value={batch.batch_code}>{batch.batch_code}</MenuItem>
                    ))}
                  </Select>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <InputLabel>Quantity per bag</InputLabel>
                    <TextField
                      type="number"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      name="weight_of_each_sub_batch"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <InputLabel>Number of Bags</InputLabel>
                    <TextField
                      type="number"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      name="number_of_sub_batches"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <br />
                <Button variant="contained" sx={{ textTransform: "none" }} color="success" onClick={generateSubBatch}>Generate Sub-Batch</Button>
              </FormCard>
              {generated && (
                <FormCard heading="Sub-batch Details">
                  <TableContainer>
                    <Table stickyHeader>
                      <TableHead>
                        <TableRow>
                          <TableCell>Sub-batch</TableCell>
                          <TableCell>Cold Storage Unit</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {details && details.map((row, index) => (
                          <TableRow
                            key={index}
                          >
                            <TableCell component="th" scope="row">{row}</TableCell>
                            <TableCell component="th" scope="row">
                              <TextField
                                name={row}
                                onChange={handleChange}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </FormCard>
              )}
              <Stack direction="row" spacing={2}>
                <Button variant="text">Save as draft</Button>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
              </Stack>
              <br />
            </>
          ) : (
            <FormCard>
              <div className={styles.success}>
                <h1>{success && success.message}</h1>
                <TaskAltRoundedIcon sx={{ fontSize: 86, color: "#0048B2" }} />
                <Button variant="contained" onClick={() => { setSubmitted(false); navigate("/") }}>Back to Home</Button>
              </div>
            </FormCard>
          )}

        </div>
        <Snackbar
          open={Doneerror}
          autoHideDuration={3000}
          message="Entry generated already"
        // anchorOrigin={{ "top" , "right"}}
        />
      </div >
    </>
  );
};

export default ColdStorage;
