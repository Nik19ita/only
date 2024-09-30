import styles from "./app.module.scss";
import Circul from "./Components/Circul/Circul";

const App = () => {
  return (
    <>
      <div className={styles["horizontal-line"]} />
      <div className={styles["vertical-line"]} />

      <Circul />
    </>
  );
};

export default App;
