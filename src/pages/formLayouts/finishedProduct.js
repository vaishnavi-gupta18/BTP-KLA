import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput, InputAdornment, FormHelperText, FormLabel, Radio, RadioGroup, Button, InputLabel, Checkbox, FormGroup } from '@mui/material';
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
const criticaldefects = ["Diseased", "Pest Infestation", "Pest Damaged", "Pest Rots and moulds"]
const majordefects = ["Damaged", "Shriveled", "Peels", "EVM", "FM", "Whiteness"]

const PurchaseRegister = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading="Finished Product Inspection Report"
        subheading="Data entry for product parameters after final inspection"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Grain Diameter">
                <div className={styles.field}>
                  <FormControl>
                    <Stack direction="row" spacing={3}>
                      <FormLabel sx={{ width: "15%" }}> &lt; 6 mm</FormLabel>
                      <OutlinedInput
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      />
                      <FormHelperText>(Max 3%)</FormHelperText>
                    </Stack>
                  </FormControl>
                </div>
                <div className={styles.field}>
                  <FormControl>
                    <Stack direction="row" spacing={3}>
                      <FormLabel sx={{ width: "15%" }}>7 - 8 mm</FormLabel>
                      <OutlinedInput
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      />
                      <FormHelperText>(Max 20%)</FormHelperText>
                    </Stack>
                  </FormControl>
                </div>
                <div className={styles.field}>
                  <FormControl>
                    <Stack direction="row" spacing={3}>
                      <FormLabel sx={{ width: "15%" }}>8 - 10 mm</FormLabel>
                      <OutlinedInput
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      />
                      <FormHelperText>(Max 70%)</FormHelperText>
                    </Stack>
                  </FormControl>
                </div>
                <div className={styles.field}>
                  <FormControl>
                    <Stack direction="row" spacing={3}>
                      <FormLabel sx={{ width: "15%" }}> &gt; 10 mm</FormLabel>
                      <OutlinedInput
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      />
                      <FormHelperText>(Max 15%)</FormHelperText>
                    </Stack>
                  </FormControl>
                </div>
              </FormCard>
              <FormCard heading="Type of Cut">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                </Stack>
              </FormCard>
              <FormCard heading="Size">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                </Stack>
              </FormCard>
              <FormCard heading="Product Temperature">
                <Stack direction="row" spacing={3}>
                  <TextField type="number" sx={{ width: "100px" }} />
                  <FormHelperText>(Standard : -18°C)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Color">
                <Stack direction="row" spacing={3}>
                  <TextField sx={{ width: "100px" }} />
                  <FormHelperText>(Characteristic of the Variety)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Critical Defect">
                <FormGroup>
                  {criticaldefects && criticaldefects.map((defect, key) => (
                    <FormControlLabel control={<Checkbox />} label={defect} />
                  ))}
                </FormGroup>
              </FormCard>
              <FormCard heading="Major Defects">
                <FormGroup>
                  {majordefects && majordefects.map((defect, key) => (
                    <FormControlLabel control={<Checkbox />} label={defect} />
                  ))}
                </FormGroup>
              </FormCard>
              <FormCard heading="Peroxidase Test">
                <FormControl>
                  <RadioGroup
                    defaultValue="female"
                    name="peroxidase-test"
                  >
                    <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
                    <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
                  </RadioGroup>
                </FormControl>
              </FormCard>
              <FormCard heading="Metal Detection">
                <FormControl>
                  <RadioGroup
                    defaultValue="female"
                    name="peroxidase-test"
                  >
                    <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
                    <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
                  </RadioGroup>
                </FormControl>
                <div className={styles.field}>
                  <InputLabel>Remarks</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Other Defects">
                <div className={styles.field}>
                  <InputLabel>Pack Weight (Standard)</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Pack Weight (Observed)</InputLabel>
                  <TextField
                    type="number"
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Seal Intactness</InputLabel>
                  <FormControl>
                    <RadioGroup
                      name="blanching-result"
                    >
                      <FormControlLabel value="Not okay" control={<Radio />} label="Not okay" />
                      <FormControlLabel value="Okay" control={<Radio />} label="Okay" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </FormCard>
              <FormCard heading="Brand Packed">
                <div className={styles.field}>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
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
