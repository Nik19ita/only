import Circul from "./components/Circul/Circul";
import Dates from "./components/Dates/Dates";
import SwipperWraper from "./components/SwiperWraper/SwiperWraper";
import Title from "./components/Title/Title";
import Toggle from "./components/Toggle/Toogle";
import TwoLine from "./components/TwoLine/TwoLine";

const App = () => {
  return (
    <>
      <TwoLine />
      <Title />
      <Toggle />
      <Circul />
      <Dates />
      <SwipperWraper />
    </>
  );
};

export default App;
