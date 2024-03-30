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

import styles from './newForm.module.css'
import FormCard from '../../components/formCard';
import FormTile from '../../components/formTile';

const data = [
  {
    "checkpoint": "Checkpoint 1",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      }
    ]
  },
  {
    "checkpoint": "Checkpoint 2",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      }
    ]
  },
  {
    "checkpoint": "Quality Inspection",
    "forms": [
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility"
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
                      description={form.description}
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
