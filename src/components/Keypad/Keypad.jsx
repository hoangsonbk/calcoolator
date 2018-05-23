import  React from 'react';

import styles from './Keypad.css';

const Keypad = ({ value, color, className }) => {
  const styleName = `${styles.body} ${styles[color]} ${className}`;
  return (
    <div className={styleName}>
      <span className={styles.symbol}>
        {value}
      </span>
    </div>
  );
}

export default Keypad;