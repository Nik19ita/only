import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/scss";
import "swiper/scss/navigation";

// import required modules

import { useAppSelector } from "../../hooks/ReduxHook";
import SwipperCustom from "../SwiperCustom/SwiperCustom";

const SwipperWraper = () => {
  const { activePage } = useAppSelector((state) => state.project);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {activePage && (
        <motion.div
          key={`swiper-wraper-${activePage}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
        >
          <SwipperCustom activePage={activePage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SwipperWraper;
