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

import styles from './purchaseRegister.module.css'
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
const header = ["", "Sample No.", "View Report", "Time", "Blanching Result", "Action Taken", "Recorded by"]
const codes = ["301", "302", "303"]

const PurchaseRegister = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

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
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Date of Arrival</InputLabel>
                  <TextField
                    type="date"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Vehicle Number</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Variety</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>From</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Supplier</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weight as per Supplier</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weight as per our WM</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Weighment Slip number</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Rate</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Color of Raw Material">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Texture">
                <div className={styles.field}>
                  <FormControl>
                    <RadioGroup
                      name="blanching-result"
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
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Maturity">
                <div className={styles.field}>
                  <FormControl>
                    <RadioGroup
                      name="blanching-result"
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
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Characteristic to the vegetable)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Appearance">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Final Weight Accepted">
                <Stack direction="row" spacing={3}>
                  <TextField type="number" sx={{ width: "100px" }} />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Quality Accepted /Rejected">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Free from mud and other dust)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Remarks">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "50%" }} />
                </Stack>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="text">Save as draft</Button>
                <Button variant="contained" onClick={() => setSubmitted(true)}>Continue</Button>
              </Stack>
              <br />
            </>
          ) : (
            <ReportCard batch="GP247911" date="1 November 2023" time="15:36" person="Austin Robertson">
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {header && header.map((head) => (
                        <TableCell>{head}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody stripedRows>
                    {data.map((row, index) => (
                      <TableRow
                        key={index}
                      >
                        <TableCell component="th" scope="row">{index}</TableCell>
                        <TableCell className={styles.colored}>{row.sample_no}</TableCell>
                        <TableCell><VisibilityIcon sx={{ color: "grey" }} /></TableCell>
                        <TableCell className={styles.colored}>{row.time}</TableCell>
                        <TableCell>{row.blanching_result}</TableCell>
                        <TableCell className={styles.colored}>{row.action_taken}</TableCell>
                        <TableCell>{row.recorded_by}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ReportCard>
          )}

        </div>
      </div >
    </>
  );
};

export default PurchaseRegister;
