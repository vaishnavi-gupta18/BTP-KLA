import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import styles from './formTile.module.css';

const FormTile = (props) => {
  return (
    <div className={styles.tile}>
      <div className={styles.header}>{props.title}</div>
      <div className={styles.content}>
        {props.status == 'pending' ? (
          <> Filled by {props.filledBy} </>
        ) : (
          <> Approved by {props.approvedBy} </>
        )}
        <br />
        {props.date}
      </div>
      <div className={styles.actions}>
        <Button size="small" variant="contained">View</Button>
        {props.status == 'pending' ? (
          <Button size="small" variant="contained" color="success">Approve</Button>
        ) : (
          <Button size="small" variant="contained" color="error">Reject</Button>
        )}
      </div>
      {/* <div className={styles.comment}>
        <TextField placeholder='Add comment' />
      </div> */}
    </div>
  );
};

export default FormTile;
