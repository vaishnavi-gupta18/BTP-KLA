import React from 'react';

import styles from './header.module.css';

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.subheading}>{props.subheading}</div>
    </div>
  );
};

export default Header;
