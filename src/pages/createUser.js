import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar';
import Header from '../components/header';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import styles from './createUser.module.css'
import FormCard from '../components/formCard';

const checkpoints = ["Checkpoint1", "Checkpoint2", "Checkpoint3"]
const roles = ["Worker", "Supervisor", "Admin"]

const CreateUser = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    dob: '',
    designation: '',
    department: '',
    address: '',
    phone: '',
    email: '',
    role: ''
  })
  const [details, setDetails] = useState(null)
  const [complete, setComplete] = useState(false)

  // const [fullname, setFullname] = useState('');
  // const [doj, setDoj] = useState('');
  // const [designation, setDesignation] = useState('');
  // const [department, setDepartment] = useState('');
  // const [address, setAddress] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (name == "dob") {
      value = value + "T15:04:05Z"
    }
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
        "role": "ADMIN"
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8080/api/admin/employee/add", {
        method: "POST",
        // headers: {
        //   Authorization: `Bearer ${idToken}`,
        // },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 201) {
        setDetails(res);
        setSubmitted(true)
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
        heading="Create New Member"
        subheading="Enter the required information to create a new user, assign roles etc."
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {!submitted ? (
            <>
              <FormCard heading="Personal Details">
                <div className={styles.field}>
                  <InputLabel required>Full Name</InputLabel>
                  <TextField
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Date of Joining</InputLabel>
                  <TextField
                    type="date"
                    variant="outlined"
                    name="dob"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Designation</InputLabel>
                  <TextField
                    variant="outlined"
                    name="designation"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Department</InputLabel>
                  <TextField
                    variant="outlined"
                    name="department"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel required>Residential Address</InputLabel>
                  <TextField
                    variant="outlined"
                    name="address"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Contact Details">
                <div className={styles.field}>
                  <InputLabel required>Mobile Number</InputLabel>
                  <TextField
                    variant="outlined"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <InputLabel>Email</InputLabel>
                  <TextField
                    type="email"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </FormCard>
              <FormCard heading="Roles and Access">
                <FormGroup>
                  {checkpoints && checkpoints.map((checkpoint, key) => (
                    <>
                      <Stack direction="row" className={styles.checkpoint}>
                        <FormControlLabel control={<Checkbox />} label={checkpoint} />
                        <FormControl>
                          <Select
                            // value={role}
                            // onChange={handleChange}
                            displayEmpty
                          >
                            {roles && roles.map((role, key) => (
                              <MenuItem value={role}>{role}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                    </>
                  ))}
                </FormGroup>
              </FormCard>
              <FormCard>
                <div className={styles.fileUpload}>
                  <Stack direction="row" spacing={3}>
                    <CameraAltIcon color="disabled" sx={{ fontSize: 48 }} />
                    <Stack direction="column">
                      <div className={styles.fileHeading}>Upload User Profile Picture</div>
                      <input
                        type="file"
                        id="profilePhoto"
                        className={styles.fileInput}
                      />
                      <label htmlFor='profilePhoto'>
                        <div className={styles.fileSubheading}>Click to select files</div>
                      </label>
                    </Stack>
                  </Stack>
                </div>
              </FormCard>
              <FormCard>
                <div className={styles.fileUpload}>
                  <Stack direction="row" spacing={3}>
                    <InsertDriveFileIcon color="disabled" sx={{ fontSize: 48 }} />
                    <Stack direction="column">
                      <div className={styles.fileHeading}>Upload Document</div>
                      <input
                        type="file"
                        id="document"
                        className={styles.fileInput}
                      />
                      <label htmlFor='document'>
                        <div className={styles.fileSubheading}>Click to select files</div>
                      </label>
                    </Stack>
                  </Stack>
                </div>
              </FormCard>
              <Stack direction="row" spacing={2}>
                <Button variant="text">Save as draft</Button>
                <Button variant="contained" onClick={handleSubmit}>Continue</Button>
              </Stack>
              <br />
            </>
          ) : (
            <>
              <FormCard>
                <div className={styles.success}>
                  <h1>New User created successfully</h1>
                  <TaskAltRoundedIcon sx={{ fontSize: 86, color: "#0048B2" }} />
                  <div>
                    <div>
                      {console.log(details)}
                      <span className={styles.blue}>Employee ID :</span><span> {details.employee_id} </span>
                    </div>
                    <div>
                      <span className={styles.blue}>Password : </span><span> {details.temporary_password} </span>
                    </div>
                  </div>
                  <Button variant="contained" onClick={() => { setSubmitted(false); navigate("/product") }}>Back to Home</Button>
                </div>
              </FormCard>
            </>
          )}

        </div>
      </div >
    </>
  );
};

export default CreateUser;
