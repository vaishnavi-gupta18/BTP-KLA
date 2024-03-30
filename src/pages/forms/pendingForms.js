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

import styles from './pendingForms.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';


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

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        heading="Vaishnavi Gupta"
        subheading="Marketing Administrator"
      />
      <div className={styles.main}>
        <div className={styles.formgroup}>
          <FormCard heading="Forms pending approval">
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
