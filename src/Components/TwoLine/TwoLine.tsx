import styles from "./TwoLine.module.scss";

const TwoLine = () => {
  return (
    <>
      <div className={styles["horizontal-line"]} />
      <div className={styles["vertical-line"]} />
    </>
  );
};

export default TwoLine;
