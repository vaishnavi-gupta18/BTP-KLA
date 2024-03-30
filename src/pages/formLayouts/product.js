import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { OutlinedInput, InputAdornment, FormHelperText, FormLabel, Radio, RadioGroup, Button } from '@mui/material';

import styles from './product.module.css'
import FormCard from '../../components/formCard';


const defects = ["Diseased", "Pest Infestation", "Pest Damaged", "Pest Rots and moulds"]
const roles = ["Worker", "Supervisor", "Admin"]

const Product = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState("Click to select files")

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setFile(files[0].name);
  };

  return (
    <>
      <Header
        heading="Product Inspection Report"
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
                      <FormLabel>0 - 6 mm</FormLabel>
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
                      <FormLabel>7 - 8 mm</FormLabel>
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
                      <FormLabel>8 - 10 mm</FormLabel>
                      <OutlinedInput
                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      />
                      <FormHelperText>(Max 3%)</FormHelperText>
                    </Stack>
                  </FormControl>
                </div>
              </FormCard>
              <FormCard heading="Product Temperature">
                <Stack direction="row" spacing={3}>
                  <TextField type="number" />
                  <FormHelperText>(Standard : 18°C)</FormHelperText>
                </Stack>
              </FormCard>
              <FormCard heading="Critical Defect">
                <FormGroup>
                  {defects && defects.map((defect, key) => (
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
              <FormCard>
                <div className={styles.fileUpload}>
                  <Stack direction="row" spacing={3}>
                    <CameraAltIcon color="disabled" sx={{ fontSize: 48 }} />
                    <Stack direction="column">
                      <div className={styles.fileHeading}>Upload Product Image</div>
                      <input
                        type="file"
                        id="productPhoto"
                        className={styles.fileInput}
                        onChange={handleFileUpload}
                      />
                      <label htmlFor='productPhoto'>
                        <div className={styles.fileSubheading}>{file}</div>
                      </label>
                    </Stack>
                  </Stack>
                </div>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="text">Save as draft</Button>
                <Button variant="contained" onClick={() => setSubmitted(true)}>Continue</Button>
              </Stack>
              <br />
            </>
          ) : (
            <>
              <FormCard>
                <div className={styles.success}>
                  <h1>Report submitted successfully</h1>
                  <TaskAltRoundedIcon sx={{ fontSize: 86, color: "#0048B2" }} />
                  <h5>You can access the report in your dashboard</h5>
                  <Button variant="contained" onClick={() => setSubmitted(true)}>Download Report</Button>
                  <Button variant="text" onClick={() => { setSubmitted(false); navigate("/") }}>Back to Home</Button>
                </div>
              </FormCard>
            </>
          )}

        </div>
      </div >
    </>
  );
};

export default Product;
