import styles from "./app.module.scss";
import Circul from "./components/Circul/Circul";
import Dates from "./components/Dates/Dates";
import SwipperWraper from "./components/SwiperWraper/SwiperWraper";
import Title from "./components/Title/Title";
import Toggle from "./components/Toggle/Toogle";

const App = () => {
  return (
    <>
      <div className={styles["horizontal-line"]} />
      <div className={styles["vertical-line"]} />
      <Title />
      <Toggle />
      <Circul />
      <Dates />
      <SwipperWraper />
    </>
  );
};

export default App;
