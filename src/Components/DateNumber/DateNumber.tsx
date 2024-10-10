/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect, useState } from "react";
import data from "../../Copyright.ts";
import { useAppSelector } from "../../hooks/ReduxHook";
import styles from "./DateNumber.module.scss";

interface IDateNumberProps {
  numberComponent: "first" | "second";
}

const DateNumber: FC<IDateNumberProps> = ({ numberComponent }) => {
  const numberData = numberComponent === "first" ? 0 : 1;
  const activePage = useAppSelector((state) => state.project.activePage);
  const [dateNumber, setDateNumber] = useState(data[0][numberData]);

  useEffect(() => {
    if (data[activePage - 1][numberData] > dateNumber) {
      dateNumber !== data[activePage - 1][numberData] &&
        setTimeout(setDateNumber, 30, dateNumber + 1);
    } else {
      dateNumber !== data[activePage - 1][numberData] &&
        setTimeout(setDateNumber, 30, dateNumber - 1);
    }
  }, [dateNumber, numberComponent, numberData, activePage]);

  return (
    <p className={[styles.date, styles[`${numberComponent}`]].join(" ")}>
      {dateNumber}
    </p>
  );
};

export default DateNumber;
