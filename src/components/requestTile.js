import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, Stack } from '@mui/material';

import styles from './requestTile.module.css';

const FormTile = (props) => {
  const [reply, setReply] = useState("");

  const handleSubmit = async (accepted) => {
    let data = {
      "request_id": props.id,
      "accepted": accepted,
      "admin_comment": reply
    }

    const token = localStorage.getItem("token")
    try {
      const response = await fetch("http://localhost:8080/api/admin/employee/approve-request", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const res = await response.json();
      if (response.status == 200) {
        props.fetchRequests()
      }
      else {
        console.log("Error occured : " + response.status)
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.tile} style={{ minWidth: props.status == "requested" ? "300px" : "200px" }}>
      <div className={styles.top}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <div className={styles.header}>{props.title}</div>
          {props.status != "requested" && (
            <div className={styles.status} style={{ color: props.status == "Dismissed" ? "#C03221" : "#00B000" }}>{props.status}</div>
          )}
        </Stack>
        <div className={styles.content}>
          {props.requestedBy}
          <br />
          {props.date.slice(0, 10)}
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
      {props.status == 'approved' && (
        <div className={styles.bottom}>
          <div className={styles.actions}>
            <Button size="small" variant="contained">View</Button>
            <Button size="small" variant="contained" color="error">Reject</Button>
          </div>
          <TextField placeholder='Add comment' fullWidth />
        </div>
      )}
      {props.status == 'requested' && localStorage.getItem("role") == "ADMIN" && (
        <div className={styles.bottom}>
          <TextField placeholder='Reply' fullWidth onChange={(e) => setReply(e.target.value)} />
          <div className={styles.actions}>
            <Button size="small" variant="contained" onClick={() => handleSubmit(true)}>Accept</Button>
            <Button size="small" variant="contained" color="error" onClick={() => handleSubmit(false)}> Dismiss</Button>
          </div>
        </div>
      )}
      {props.adminComment && props.adminComment != "" && (
        <div className={styles.reply}>
          <div className={styles.content}>
            {props.resolvedBy}
            <br />
            {props.resolvedDate.slice(0, 10)}
          </div>
          <div className={styles.description}>{props.adminComment}</div>
        </div>
      )
      }
    </div >
  );
};

export default FormTile;
