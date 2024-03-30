import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, Stack } from '@mui/material';

import styles from './requestTile.module.css';

const FormTile = (props) => {
  const [reply, setReply] = useState(false);

  return (
    <div className={styles.tile} style={{ minWidth: props.status == "requested" ? "300px" : "200px" }}>
      <div className={styles.top}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <div className={styles.header}>{props.title}</div>
          {props.status != "requested" && (
            <div className={styles.status} style={{ color: props.status == "dismissed" ? "#C03221" : "#00B000" }}>{props.status}</div>
          )}
        </Stack>
        <div className={styles.content}>
          {props.requestedBy}
          <br />
          {props.date}
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
      {props.status == 'requested' && (
        <div className={styles.bottom}>
          {reply && (<TextField placeholder='Reply' fullWidth />)}
          <div className={styles.actions}>
            {reply ? (
              <Button size="small" variant="contained" color="success">Send Reply</Button>
            ) : (
              <Button size="small" variant="contained" onClick={() => setReply(true)}>Reply</Button>
            )}
            <Button size="small" variant="contained" color="error">Dismiss</Button>
          </div>
        </div>
      )}
      {props.replies && props.replies.map((r, index) => {
        return (
          <div className={styles.reply}>
            <div className={styles.content}>
              {r.repliedBy}
              <br />
              {r.date}
            </div>
            <div className={styles.description}>{r.description}</div>
          </div>
        )
      })}
    </div>
  );
};

export default FormTile;
