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

import styles from './completeForms.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';

const data = [
  {
    "checkpoint": "Checkpoint 1",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      }
    ]
  },
  {
    "checkpoint": "Checkpoint 2",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      }
    ]
  },
  {
    "checkpoint": "Quality Inspection",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      },
      {
        "title": "Process Parameters",
        "status": "complete",
        "filledBy": "Nikita",
        "date": "14/02/2024"
      },
      {
        "title": "Quality Report",
        "status": "complete",
        "filledBy": "Kritika",
        "date": "14/02/2024"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "complete",
        "filledBy": "Shreya Bhagat",
        "date": "14/02/2024"
      }
    ]
  }

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
          {data && data.map((checkpoint, ind) => {
            return (
              <FormCard heading={checkpoint.checkpoint}>
                <div className={styles.carousel}>
                  {checkpoint.forms && checkpoint.forms.map((form, key) =>
                    <FormTile
                      title={form.title}
                      status={form.status}
                      filledBy={form.filledBy}
                      date={form.date}
                    />
                  )}
                </div>
              </FormCard>
            )
          }
          )}
        </div>
      </div >
    </>
  );
};

export default Dashboard;
