import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/navbar';
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
const requests = [
  {
    "title": "Password Change",
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team. I need to renew my worker’s password since he has been removed from the current team. "
  },
  {
    "title": "Form Updates",
    "status": "requested",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
  },
  {
    "title": "Password Change",
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team"
  },
  {
    "title": "Form Updates",
    "status": "requested",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
  },
]
const users = ["Worker1", "Manager1", "Worker2", "Worker3", "Worker4", "Manager2"]
const roles = ["Worker", "Supervisor", "Admin"]

const Dashboard = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header
        heading="Vaishnavi Gupta"
        subheading="Marketing Administrator"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard heading="Requests">
            <div className={styles.carousel}>
              {requests && requests.map((request, key) =>
                <FormTile
                  title={request.title}
                  status={request.status}
                  requestedBy={request.requestedBy}
                  date={request.date}
                  description={request.description}
                />
              )}
            </div>
          </FormCard>
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
        </div>
      </div >
    </>
  );
};

export default Dashboard;
