import { useRef } from "react";
import Dot from "../Common/Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const container = useRef(null);

  console.log();

  return (
    <div className={styles.circul}>
      {[1, 2, 3, 4, 5, 6].map((_, index) => {
        return (
          <Dot key={`list-dots${index}`} number={index + 1} action="forward" />
        );
      })}
    </div>
  );
};

export default Circul;
