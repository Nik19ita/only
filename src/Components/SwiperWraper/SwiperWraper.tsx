import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/scss";
import "swiper/scss/navigation";

// import required modules

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setMoveBoolean } from "../../store/slice";
import SwipperCustom from "../SwiperCustom/SwiperCustom";

const SwipperWraper = () => {
  const dispatch = useAppDispatch();
  const { moveBoolean, move, activePage } = useAppSelector(
    (state) => state.project,
  );

  useEffect(() => {
    if (moveBoolean === false) {
      setTimeout(() => {
        dispatch(setMoveBoolean(true));
      }, 300);
    }
  }, [dispatch, moveBoolean]);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence initial={false}>
      {moveBoolean && (
        <motion.div
          key={move}
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
