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
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading="Requests"
        subheading="Send and manage requests for easier workflow"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Request Details">
                <div className={styles.field}>
                  <InputLabel required>Title</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Description</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Recipient</InputLabel>
                  <TextField
                    variant="outlined"
                    sx={{ width: "50%" }}
                  // onChange={handleChange}
                  />
                </div>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="text">Dismiss</Button>
                <Button variant="contained">Send</Button>
              </Stack>
              <br />
            </>
          ) : (
            <ReportCard batch="GP247911" date="1 November 2023" time="15:36" person="Austin Robertson">
            </ReportCard>
          )}

        </div>
      </div >
    </>
  );
};

export default ProcessingQuality;
