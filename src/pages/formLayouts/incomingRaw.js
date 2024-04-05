import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, InputAdornment, FormHelperText, FormLabel, Radio, RadioGroup, Button, InputLabel, Select, MenuItem, typographyClasses, Typography } from '@mui/material';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import styles from './incomingRaw.module.css'
import FormCard from '../../components/formCard';
import ReportCard from "../../components/reportCard";

const data = [
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
  {
    "sample_no": "Green Peas",
    "time": "18:00",
    "blanching_result": "Positive",
    "action_taken": "Batch Accepted",
    "recorded_by": "John Doe"
  },
]
const header = ["SNo.", "Raw Material Name", "View Report", "Batch Code", "Date of Arrival", "Supplier", "Rate"]

const IncomingRaw = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null)

  let { checkpointId, type, date } = useParams()

  const fetchRecords = async (e) => {
    const batch_code = type + "/" + date
    const paramData = {
      "checkpoint_id": checkpointId,
      "batch_code": type + "/" + date
    }
    console.log(paramData)
    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/supervisor/fetch-form-data/" + checkpointId + "/" + batch_code, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })

      const res = await response.json();
      if (response.status == 200) {
        console.log(res)
        setData(res.data)
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

  useEffect(() => {
    fetchRecords()
  }, []);

  return (
    <>
      <Header
        heading="Incoming Raw Material Inspection Record"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <ReportCard batch={data && data.batch_code} date={data && data.date_of_arrival.slice(0, 10)} time={data && data.date_of_arrival.slice(11, 16)} person="Anmol Aggarwal">
            <div className={styles.field}>
              <InputLabel>Name of Raw Material</InputLabel>
              <Typography>{data && data.name}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Date of Arrival</InputLabel>
              <Typography>{data && data.date_of_arrival.slice(0, 10)}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Vehicle Number</InputLabel>
              <Typography>{data && data.vehicle_number}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Variety</InputLabel>
              <Typography>{data && data.variety}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>From</InputLabel>
              <Typography>{data && data.received_from}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Supplier</InputLabel>
              <Typography>{data && data.supplier}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Weight as per Supplier</InputLabel>
              <Typography>{data && data.weight_supplier}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Weight as per our WM</InputLabel>
              <Typography>{data && data.weight_WM}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Weighment Slip number</InputLabel>
              <Typography>W89</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Rate</InputLabel>
              <Typography>{data && data.rate}</Typography>
            </div>
          </ReportCard>
          <FormCard>
            <div className={styles.field}>
              <InputLabel>Color of Raw Material</InputLabel>
              <Typography>{data && data.color}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Texture</InputLabel>
              <Typography>{data && data.texture}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Size of Raw Material</InputLabel>
              <Typography>{data && data.size}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Maturity</InputLabel>
              <Typography>{data && data.maturity}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Aroma</InputLabel>
              <Typography>{data && data.aroma}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Appearance</InputLabel>
              <Typography>{data && data.appearance}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Final Weight Accepted</InputLabel>
              <Typography>{data && data.weight_accepted}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Quantity Accepted /Rejected</InputLabel>
              <Typography>{data && data.quantity_rejected}</Typography>
            </div>
            <div className={styles.field}>
              <InputLabel>Remarks</InputLabel>
              <Typography>{data && data.remarks}</Typography>
            </div>
          </FormCard>
        </div>
      </div >
    </>
  );
};

export default IncomingRaw;
