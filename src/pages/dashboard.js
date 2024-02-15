import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar';
import SideDrawer from '../components/drawer';
import Header from '../components/header';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { Select, MenuItem, Typography } from '@mui/material';

import styles from './dashboard.module.css'
import FormCard from '../components/formCard';
import FormTile from '../components/formTile';

const pendingForms = [
  {
    "title": "Okra Inspection",
    "status": "pending",
    "filledBy": "Shreya Bhagat",
    "date": "14/02/2024"
  },
  {
    "title": "Peas Inspection",
    "status": "pending",
    "filledBy": "Nikita",
    "date": "14/02/2024"
  },
  {
    "title": "Quality Report",
    "status": "pending",
    "filledBy": "Kritika",
    "date": "14/02/2024"
  },
  {
    "title": "Pumpkin Inspection",
    "status": "pending",
    "filledBy": "Shreya Bhagat",
    "date": "14/02/2024"
  },
  {
    "title": "Beans Inspection",
    "status": "pending",
    "filledBy": "Nikita",
    "date": "14/02/2024"
  },
  {
    "title": "Quality Report",
    "status": "pending",
    "filledBy": "Kritika",
    "date": "14/02/2024"
  },
]

const approvedForms = [
  {
    "title": "Okra Inspection",
    "status": "approved",
    "approvedBy": "Shreya Bhagat",
    "date": "14/02/2024"
  },
  {
    "title": "Peas Inspection",
    "status": "approved",
    "approvedBy": "Nikita",
    "date": "14/02/2024"
  },
  {
    "title": "Quality Report",
    "status": "approved",
    "approvedBy": "Kritika",
    "date": "14/02/2024"
  },
  {
    "title": "Pumpkin Inspection",
    "status": "approved",
    "approvedBy": "Shreya Bhagat",
    "date": "14/02/2024"
  },
  {
    "title": "Beans Inspection",
    "status": "approved",
    "approvedBy": "Nikita",
    "date": "14/02/2024"
  },
  {
    "title": "Quality Report",
    "status": "approved",
    "approvedBy": "Kritika",
    "date": "14/02/2024"
  },
]
const users = ["Worker1", "Manager1", "Worker2", "Worker3", "Worker4", "Manager2"]
const roles = ["Worker", "Supervisor", "Admin"]

const Dashboard = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      <NavBar />
      <SideDrawer />
      <Header
        heading="Vaishnavi Gupta"
        subheading="Marketing Administrator"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard heading="Pending Forms">
            <div className={styles.carousel}>
              {pendingForms && pendingForms.map((form, key) =>
                <FormTile
                  title={form.title}
                  status={form.status}
                  filledBy={form.filledBy}
                  date={form.date}
                />
              )}
            </div>
          </FormCard>
          <FormCard heading="Approved Forms">
            <div className={styles.carousel}>
              {approvedForms && approvedForms.map((form, key) =>
                <FormTile
                  title={form.title}
                  status={form.status}
                  approvedBy={form.approvedBy}
                  date={form.date}
                />
              )}
            </div>
          </FormCard>
          <FormCard heading="Roles and Access">
            <FormGroup>
              {users && users.map((user, key) => (
                <>
                  <Stack direction="row" className={styles.role}>
                    <Typography>{user}</Typography>
                    <FormControl>
                      <Select
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
        </div>
      </div >
    </div >
  );
};

export default Dashboard;
