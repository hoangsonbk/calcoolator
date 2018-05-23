import React from 'react';
import styles from './App.css';
import Keypad from 'components/Keypad/Keypad';

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.base}>
        <div className={`${styles.row} ${styles.console}`}>
        </div>
        <div className={styles.row}>
          <Keypad value="C" color="color1" />
          <Keypad value="+/-" color="color1" />
          <Keypad value="%" color="color1" />
          <Keypad value="÷" color="color1" />
        </div>
        <div className={styles.row}>
          <Keypad value="1" color="color3" />
          <Keypad value="2" color="color3" />
          <Keypad value="3" color="color3" />
          <Keypad value="×" color="color1" />
        </div>
        <div className={styles.row}>
          <Keypad value="4" color="color3" />
          <Keypad value="5" color="color3" />
          <Keypad value="6" color="color3" />
          <Keypad value="−" color="color1" />
        </div>
        <div className={styles.row}>
          <Keypad value="7" color="color3" />
          <Keypad value="8" color="color3" />
          <Keypad value="9" color="color3" />
          <Keypad value="+" color="color1" />
        </div>
        <div className={styles.row}>
          <Keypad value="0" color="color3" className={styles.botLeft} />
          <Keypad value="00" color="color3" />
          <Keypad value="." color="color3" />
          <Keypad value="=" color="color2" className={styles.botRight} />
        </div>
      </div>
    </div>
  );
}

export default App;
