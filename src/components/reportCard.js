import React from 'react';
import Paper from '@mui/material/Paper';

import styles from './reportCard.module.css';

const ReportCard = (props) => {
  return (
    <div className={styles.formcard} style={{ width: `${props.width}` }}>
      <Paper elevation={0}>
        <div className={styles.container}>
          <div>
            <h2>Batch <span className={styles.blue}>#{props.batch}</span></h2>
            <div>
              <span className={styles.field}>Submitted by: </span>
              <span className={styles.value}>{props.person}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={styles.field}>Date: </span>
              <span className={styles.value}>{props.date}</span>
            </div>
            <div>
              <span className={styles.field}>Time: </span>
              <span className={styles.value}>{props.time}</span>
            </div>
          </div>
        </div>

        {props.children}
      </Paper>
    </div>

  );
};

export default ReportCard;
