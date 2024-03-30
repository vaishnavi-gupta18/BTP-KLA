import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/header';

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
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import styles from './profile.module.css'
import FormCard from '../components/formCard';
import ReportCard from "../components/reportCard";

const header = ["", "Sample No.", "View Report", "Time", "Blanching Result", "Action Taken", "Recorded by"]
const codes = ["301", "302", "303"]

const data = {
  "employee_id": 2,
  "name": "Vaishnavi Gupta",
  "dob": "1990-02-01T05:30:00+05:30",
  "doj": "2024-03-27T12:32:52.432+05:30",
  "designation": "Marketing Administrator",
  "department": "Packaging",
  "address": "123 Main, Roorkee",
  "phone": "134567890",
  "email": "vaishnavi@example.com",
  "role": "ADMIN"
}

const Profile = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading={data.name}
        subheading={data.designation}
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Personal Details">
                <div className={styles.field}>
                  <div className={styles.label}>
                    Full Name
                  </div>
                  <div className={styles.value}>
                    {data.name}
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>
                    Date of Joining
                  </div>
                  <div className={styles.value}>
                    {data.doj}
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>
                    Designation
                  </div>
                  <div className={styles.value}>
                    {data.designation}
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>
                    Department
                  </div>
                  <div className={styles.value}>
                    {data.department}
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>
                    Residential Address
                  </div>
                  <div className={styles.value}>
                    {data.address}
                  </div>
                </div>
              </FormCard>
              <FormCard heading="Contact Details">
                <div className={styles.field}>
                  <div className={styles.label}>
                    Mobile Number
                  </div>
                  <div className={styles.value}>
                    {data.phone}
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>
                    Email ID
                  </div>
                  <div className={styles.value}>
                    {data.email}
                  </div>
                </div>
              </FormCard>
              <FormCard>
                <div className={styles.fileUpload}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Stack direction="row" spacing={3}>
                      <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png" width='48px' />
                      <Stack direction="column">
                        <div className={styles.fileHeading}>Profile Picture</div>
                        <div className={styles.fileSubheading}>Click to view</div>
                      </Stack>

                    </Stack>
                    <Stack direction="row" spacing={3}>
                      <div>
                        <label htmlFor='profilePhoto'>Upload New</label>
                        <input
                          type="file"
                          id="profilePhoto"
                          className={styles.fileInput}
                        />
                      </div>
                      <Button size="small" variant="contained" color="error">Delete</Button>
                    </Stack>
                  </Stack>
                </div>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" >Save Changes</Button>
              </Stack>
              <br />
            </>
          ) : (
            <div>
            </div>
          )}

        </div>
      </div >
    </>
  );
};

export default Profile;
