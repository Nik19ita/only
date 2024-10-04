import styles from "./app.module.scss";
import Circul from "./components/Circul/Circul";
import Dates from "./components/Dates/Dates";
import SwiperCoponent from "./components/Swiper/Swiper";
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
      <SwiperCoponent />
    </>
  );
};

export default App;
