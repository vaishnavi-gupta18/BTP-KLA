import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import styles from './formTile.module.css';

const FormTile = (props) => {
  return (
    <div className={styles.tile} style={{ minWidth: props.status == "requested" ? "300px" : "200px" }}>
      <div className={styles.top} style={{ gap: props.status == ("complete" || "new") ? "0" : "16px" }}>
        <div className={styles.header}>{props.title}</div>
        <div className={styles.content}>
          {props.status == 'pending' && <> Filled by {props.filledBy} </>}
          {props.status == 'approved' && <> Approved by {props.approvedBy} </>}
          {props.status == 'requested' && <> {props.requestedBy} </>}
          {props.status == 'complete' && <> Last filled by {props.filledBy} </>}
          {props.status == 'new' && <> {props.description} </>}
          <br />
          {props.date}
        </div>
        {props.status != 'new' && <div className={styles.description}>{props.description}</div>}

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
      {props.status == 'complete' && (
        <div className={styles.bottom}>
          <div className={styles.actions}>
            <Button size="small" variant="contained">View</Button>
          </div>
        </div>
      )}
      {props.status == 'requested' && (
        <div className={styles.bottom}>
          <div className={styles.actions}>
            <Button size="small" variant="contained">Read Message</Button>
            <Button size="small" variant="contained" color="error">Dismiss</Button>
          </div>
          <TextField placeholder='Reply' fullWidth />
        </div>
      )}
      {props.status == 'new' && (
        <div className={styles.bottom}>
          <div className={styles.actions}>
            <Button size="small" variant="contained" color="success">Create</Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FormTile;
