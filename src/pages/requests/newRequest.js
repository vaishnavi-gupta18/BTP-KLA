import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, InputAdornment, FormHelperText, FormLabel, Radio, RadioGroup, Button, InputLabel, Select, MenuItem } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';

import styles from './newRequest.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";


const ProcessingQuality = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    request_description: '',
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/worker/raise-request", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        let newData = {
          title: '',
          request_description: ''
        }
        setData(newData)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Header
        heading="Requests"
        subheading="Send and manage requests for easier workflow"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <>
            <FormCard heading="Request Details">
              <div className={styles.field}>
                <InputLabel required>Title</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "50%" }}
                  value={data.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <InputLabel required>Description</InputLabel>
                <TextField
                  variant="outlined"
                  sx={{ width: "50%" }}
                  name="request_description"
                  value={data.request_description}
                  onChange={handleChange}
                />
              </div>
            </FormCard>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleSubmit}>Send</Button>
            </Stack>
            <br />
          </>
        </div>
      </div >
    </>
  );
};

export default ProcessingQuality;
