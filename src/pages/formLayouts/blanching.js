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

import styles from './blanching.module.css'
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

const Product = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading="Daily Blanching Record"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Editable Details">
                <div className={styles.field}>
                  <InputLabel required>Batch number</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Sample number</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Bag number</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Time">
                <Stack direction="row" spacing={3}>
                  <TextField type="number" sx={{ width: "100px" }} />
                  <FormHelperText>(Standard : 10-15 min)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Blanching Temperature">
                <Stack direction="row" spacing={3}>
                  <TextField type="number" sx={{ width: "100px" }} />
                  <FormHelperText>(Standard : 90 - 95°C)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Blanching Result">
                <FormControl>
                  <RadioGroup
                    name="blanching-result"
                  >
                    <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
                    <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
                  </RadioGroup>
                </FormControl>
              </FormCard>
              <FormCard heading="Action Taken">
                <FormControl>
                  <RadioGroup
                    name="action-taken"
                  >
                    <FormControlLabel value="Batch Accepted" control={<Radio />} label="Batch Accepted" />
                    <FormControlLabel value="Batch Rejected" control={<Radio />} label="Batch Rejected" />
                  </RadioGroup>
                </FormControl>
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

export default Product;
