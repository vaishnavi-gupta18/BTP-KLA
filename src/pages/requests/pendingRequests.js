import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/navbar';
import Header from '../../components/header';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FormControl from '@mui/material/FormControl';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { Select, MenuItem, Typography } from '@mui/material';

import styles from './requests.module.css'
import FormCard from '../../components/formCard';
import RequestTile from '../../components/requestTile';

const requests = [
  {
    "id": "1",
    "title": "Password Change",
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team. I need to renew my worker’s password since he has been removed from the current team. "
  },
  {
    "id": "2",
    "title": "Form Updates",
    "status": "requested",
    "requestedBy": "Nikita",
    "date": "14/02/2024",
    "description": "New fields created for the additional automation at the input weighing panel"
  },
  {
    "id": "3",
    "title": "Password Change",
    "status": "requested",
    "requestedBy": "Shreya Bhagat",
    "date": "14/02/2024",
    "description": "I need to renew my worker’s password since he has been removed from the current team"
  },
  {
    "id": "4",
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
        heading="Requests"
        subheading="Send and manage requests for easier workflow"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          {requests && requests.map((request, key) =>
            <FormCard>
              <RequestTile
                id={request.id}
                title={request.title}
                status={request.status}
                requestedBy={request.requestedBy}
                date={request.date}
                description={request.description}
              />
            </FormCard>
          )}
        </div>
      </div >
    </>
  );
};

export default Dashboard;
