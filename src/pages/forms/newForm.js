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
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "incoming-raw"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Processing Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "processing-quality"
      },
      {
        "title": "Purchase Register",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "purchase-register"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      }
    ]
  },
  {
    "checkpoint": "Checkpoint 3",
    "forms": [
      {
        "title": "Finished Product Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "finished-product"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
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
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Process Parameters",
        "status": "new",
        "filledBy": "Nikita",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Quality Report",
        "status": "new",
        "filledBy": "Kritika",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
      },
      {
        "title": "Incoming Raw Material Inspection",
        "status": "new",
        "filledBy": "Shreya Bhagat",
        "description": "Data entry for product parameters after when they first come at the facility",
        "url": "process-parameter"
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
                      url={form.url}
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
