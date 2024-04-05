import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, InputAdornment, FormHelperText, FormLabel, Radio, RadioGroup, Button, InputLabel, Select, MenuItem, typographyClasses } from '@mui/material';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import styles from './incomingRawForm.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";

const IncomingRaw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    "name": "",
    "date_of_arrival": "",
    "vehicle_number": "",
    "variety": "",
    "received_from": "",
    "supplier": "",
    "weight_supplier": "",
    "weight_WM": "",
    "weighment_slip_number": "",
    "Rate": "",
    "color": "",
    "texture": "",
    "size": "",
    "maturity": "",
    "aroma": "",
    "appearance": "",
    "weight_accepted": "",
    "quantity_rejected": "",
    "remarks": ""
  })
  const [details, setDetails] = useState({
    "batch_code": "YC/06-04-24",
    "message": "new raw material data entry made",
    "success": true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/worker/checkpoint/incoming-raw-material", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        setDetails(res);
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

  const handleChange = (event) => {
    let type = event.target.type
    let value = event.target.value;
    let name = event.target.name;

    setData((preval) => {
      if (name == "date_of_arrival") {
        value = value + "T15:04:05Z"
      }
      if (type == "number") {
        return {
          ...preval,
          [name]: parseInt(value),
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

  return (
    <>
      <Header
        heading="Incoming Raw Material Inspection Record"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Information Pod">
                <div className={styles.field}>
                  <InputLabel>Name of Raw Material</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Date of Arrival</InputLabel>
                  <TextField
                    type="date"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="date_of_arrival"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Vehicle Number</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="vehicle_number"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Variety</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="variety"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>From</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="received_from"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Supplier</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="supplier"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weight as per Supplier</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="weight_supplier"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weight as per our WM</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="weight_WM"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weighment Slip number</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="weighment_slip_number"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Rate</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                    name="Rate"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Color of Raw Material">
                <Stack direction="row" spacing={3}>
                  <TextField
                    sx={{ width: "100px" }}
                    name="color"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Texture">
                <div className={styles.field}>
                  <FormControl>
                    <RadioGroup
                      name="texture"
                      onChange={handleChange}
                    >
                      <FormControlLabel value="Firm" control={<Radio />} label="Firm" />
                      <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                      <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </FormCard>
              <FormCard heading="Size of Raw Material">
                <Stack direction="row" spacing={3}>
                  <TextField
                    sx={{ width: "100px" }}
                    name="size"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Maturity">
                <div className={styles.field}>
                  <FormControl>
                    <RadioGroup
                      name="maturity"
                      onChange={handleChange}
                    >
                      <FormControlLabel value="Immature" control={<Radio />} label="Immature" />
                      <FormControlLabel value="Mature" control={<Radio />} label="Mature" />
                      <FormControlLabel value="Over Mature" control={<Radio />} label="Over Mature" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </FormCard>
              <FormCard heading="Aroma">
                <Stack direction="row" spacing={3}>
                  <TextField
                    sx={{ width: "100px" }}
                    name="aroma"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Appearance">
                <Stack direction="row" spacing={3}>
                  <TextField
                    sx={{ width: "100px" }}
                    name="appearance"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Final Weight Accepted">
                <Stack direction="row" spacing={3}>
                  <TextField
                    type="number"
                    sx={{ width: "100px" }}
                    name="weight_accepted"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Quantity Accepted /Rejected">
                <Stack direction="row" spacing={3}>
                  <TextField
                    type="number"
                    sx={{ width: "100px" }}
                    name="quantity_rejected"
                    onChange={handleChange}
                  />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Remarks">
                <Stack direction="row" spacing={3}>
                  <TextField
                    sx={{ width: "50%" }}
                    name="remarks"
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
                <div>
                  <div>
                    <span className={styles.blue}>Batch Code :</span><span> {details.batch_code} </span>
                  </div>
                </div>
                <Button variant="contained" onClick={() => { setSubmitted(false); navigate("/incoming-raw-all") }}>Continue</Button>
              </div>
            </FormCard>
          )}

        </div>
      </div >
    </>
  );
};

export default IncomingRaw;
