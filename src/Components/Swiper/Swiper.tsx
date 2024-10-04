/* eslint-disable react/function-component-definition */
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/img/arrow-swiper.svg?react";
import data from "../../Copyright";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./Swiper.module.scss";

// import required modules

import { Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "../../hooks/ReduxHook";

const SwipperWraper = () => {
  const activePage = useAppSelector((state) => state.project.activePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(true);
  const nodeRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames={{
        appear: "my-appear",
        appearActive: "my-active-appear",
        appearDone: "my-done-appear",
        enter: "my-enter",
        enterActive: "my-active-enter",
        enterDone: "my-done-enter",
        exit: "my-exit",
        exitActive: "my-active-exit",
        exitDone: "my-done-exit",
      }}
    >
      <div ref={nodeRef}>
        <Swiper
          direction="horizontal"
          slidesPerView="auto"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            disabledClass: styles["button-disabled"],
          }}
          slideNextClass={styles["next-slide"]}
          slidesOffsetAfter={50}
          // onInit={() => setInit(true)}
          pagination={{
            clickable: true,
            clickableClass: styles.pagination,
          }}
          modules={[Navigation, Pagination]}
          className={styles.swiper}
          key={`swiper-${activePage}`}
        >
          {[
            ...Array(data[activePage - 1][1] - data[activePage - 1][0] + 1),
          ].map((_, i) => {
            return (
              <SwiperSlide
                className={styles["swiper-slide"]}
                key={`swiper-slide-${i}-${activePage}`}
              >
                <h3 className={styles.title}>{data[activePage - 1][0] + i}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          ref={prevRef}
          className={[styles.button, styles["button-prev"]].join(" ")}
        >
          <Arrow className={styles["arrow-prev"]} />
        </button>

        <button
          ref={nextRef}
          className={[styles.button, styles["button-next"]].join(" ")}
        >
          <Arrow />
        </button>
      </div>
    </CSSTransition>
  );
};

export default SwipperWraper;
