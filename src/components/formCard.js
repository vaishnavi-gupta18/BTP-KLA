import React from 'react';
import Paper from '@mui/material/Paper';

import styles from './formCard.module.css';

const FormCard = (props) => {
  return (
    <div className={styles.formcard} style={{ width: `${props.width}` }}>
      <Paper elevation={0}>
        {props.heading && (
          <h4>{props.heading}</h4>
        )}
        {props.children}
      </Paper>
    </div>

  );
};

export default FormCard;
