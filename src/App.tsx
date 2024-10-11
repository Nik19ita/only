import Circul from "./components/Circul/Circul";
import Dates from "./components/Dates/Dates";
import Paging from "./components/Paging/Paging";
import SwipperWraper from "./components/SwiperWraper/SwiperWraper";
import Title from "./components/Title/Title";
import TwoLine from "./components/TwoLine/TwoLine";

const App = () => {
  return (
    <>
      <TwoLine />
      <Title />
      <Paging />
      <Circul />
      <Dates />
      <SwipperWraper />
    </>
  );
};

export default App;
