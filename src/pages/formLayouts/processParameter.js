import React, { useState, useEffect } from "react";
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
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import styles from './processParameter.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";

const ProcessingQuality = () => {
  const navigate = useNavigate();
  const [batches, setBatches] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    "batch_code": "",
    "blancher_belt_speed": "",
    "blancher_temperature": "",
    "cooler_belt_speed": "",
    "cooler_temperature": "",
    "spray_nozzle_washer": "",
    "spray_nozzle_blancher": "",
    "spray_nozzle_cooler": "",
    "spray_nozzle_precooler": "",
    "spray_nozzle_belt_speed_1": "",
    "spray_nozzle_belt_speed_2": "",
    "iqf_air_temperature": "",
    "iqf_coil_temperature": "",
    "iqf_product_temperature": "",
    "bag_number": "",
    "total_bag": "",
    "date_added": ""
  })

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

    setData((preval) => {
      if (name == "date_added") {
        value = value + "T15:04:05Z"
      }
      if (type == "number") {
        return {
          ...preval,
          [name]: parseFloat(value),
        }
      }
      else {
        return {
          ...preval,
          [name]: value,
        }
      }
    })
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/worker/checkpoint/post-iqf", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        // setDetails(res);
        setSubmitted(true)
        console.log(res)
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBatches()
  }, []);

  return (
    <>
      <Header
        heading="Post IQF"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Blancher">
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
                <div className={styles.field}>
                  <InputLabel>Date of Entry</InputLabel>
                  <TextField
                    type="date"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="date_added"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Belt Speed</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="blancher_belt_speed"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Temperature</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="blancher_temperature"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Cooler">
                <div className={styles.field}>
                  <InputLabel>Belt Speed</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="cooler_belt_speed"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Temperature</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="cooler_temperature"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Spray Nozzle/Mesh Cleaning">
                <div className={styles.field}>
                  <InputLabel>Washer</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_washer"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Blancher</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_blancher"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Cooler</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_cooler"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Pre-Cooler</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_precooler"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Belt Speed 1</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_belt_speed_1"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Belt Speed 2</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="spray_nozzle_belt_speed_2"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="IQF">
                <div className={styles.field}>
                  <InputLabel>Air Temperature</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="iqf_air_temperature"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Coil Temperature</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="iqf_coil_temperature"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Product Temperature</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="iqf_product_temperature"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Bag number">
                <Stack direction="row" spacing={3}>
                  <TextField
                    type="number"
                    sx={{ width: "100px" }}
                    name="bag_number"
                    onChange={handleChange}
                  />
                </Stack>
              </FormCard>
              <FormCard heading="Total Bag">
                <Stack direction="row" spacing={3}>
                  <TextField type="number"
                    sx={{ width: "100px" }}
                    name="total_bag"
                    onChange={handleChange}
                  />
                </Stack>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="text">Save as draft</Button>
                <Button variant="contained" onClick={handleSubmit}>Continue</Button>
              </Stack>
              <br />
            </>
          ) : (
            <FormCard>
              <div className={styles.success}>
                <h1>Record added successfully</h1>
                <TaskAltRoundedIcon sx={{ fontSize: 86, color: "#0048B2" }} />
                <Button variant="contained" onClick={() => { setSubmitted(false); navigate("/incoming-raw-all") }}>Continue</Button>
              </div>
            </FormCard>
          )}

        </div>
      </div >
    </>
  );
};

export default ProcessingQuality;
