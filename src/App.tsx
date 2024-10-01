import styles from "./app.module.scss";
import Circul from "./components/Circul/Circul";
import Toggle from "./components/Toggle/Toogle";

const App = () => {
  return (
    <>
      <div className={styles["horizontal-line"]} />
      <div className={styles["vertical-line"]} />
      <Toggle />
      <Circul />
    </>
  );
};

export default App;
