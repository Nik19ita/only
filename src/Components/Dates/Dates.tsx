/* eslint-disable @typescript-eslint/no-unused-expressions */

import DateNumber from "../DateNumber/DateNumber";
import styles from "./Dates.module.scss";

const Dates = () => {
  return (
    <div className={styles.dates}>
      <DateNumber numberComponent="first" />
      <DateNumber numberComponent="second" />
    </div>
  );
};

export default Dates;
