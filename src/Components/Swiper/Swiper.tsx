/* eslint-disable react/function-component-definition */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);
  const activePage = useAppSelector((state) => state.project.activePage);
  const [activePageState, setActivePage] = useState(0);

  useEffect(() => {
    setTimeout(setActivePage, 300, activePage);
  }, [activePage]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const navigation = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
    disabledClass: styles["button-disabled"],
  };

  return (
    <AnimatePresence>
      {activePageState === activePage && (
        <motion.div
          className={styles.mySwipper}
          key="swiper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Swiper
            direction="horizontal"
            slidesPerView="auto"
            navigation={navigation}
            slideNextClass={styles["next-slide"]}
            pagination={{
              clickable: true,
              clickableClass: styles.pagination,
            }}
            modules={[Navigation, Pagination]}
            onInit={() => setInit(true)}
            className={styles.swiper}
          >
            {[
              ...Array(data[activePage - 1][1] - data[activePage - 1][0] + 1),
            ].map((_, i) => {
              return (
                <SwiperSlide
                  className={styles["swiper-slide"]}
                  key={`swiper-slide-${i}`}
                >
                  <h3 className={styles.title}>
                    {data[activePage - 1][0] + i}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SwipperWraper;
