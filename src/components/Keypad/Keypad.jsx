import  React from 'react';

import styles from './Keypad.css';

const Keypad = ({ value, color }) => {
  const styleName = `${styles.body} ${styles[color]}`
  return (
    <div className={styleName}>
      <span className={styles.symbol}>
        {value}
      </span>
    </div>
  );
}

export default Keypad;