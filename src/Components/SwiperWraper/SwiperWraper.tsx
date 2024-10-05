/* eslint-disable react/function-component-definition */
import { CSSTransition } from "react-transition-group";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./SwiperWraper.module.scss";

// import required modules

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setMoveBoolean } from "../../store/slice";
import SwipperCustom from "../SwiperCustom/SwiperCustom";

const SwipperWraper = () => {
  const dispatch = useAppDispatch();
  const { moveBoolean, move } = useAppSelector((state) => state.project);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMoveBoolean(true));
    }, 250);
  }, [dispatch, moveBoolean]);

  const classNames = {
    enter: styles.enter,
    enterActive: styles["enter-active"],
    exit: styles.exit,
    exitActive: styles["exit-active"],
  };

  return (
    <>
      <CSSTransition
        key={move}
        in={moveBoolean}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        unmountOnExit
        classNames={classNames}
      >
        <SwipperCustom />
      </CSSTransition>
    </>
  );
};

export default SwipperWraper;
