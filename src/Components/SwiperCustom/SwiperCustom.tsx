/* eslint-disable react/function-component-definition */
import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/img/arrow-swiper.svg?react";
import data from "../../Copyright";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./SwiperCustom.module.scss";

// import required modules

import { Navigation, Pagination } from "swiper/modules";

interface ISwipperCustomProps {
  activePage: number;
}

const SwipperCustom: FC<ISwipperCustomProps> = ({ activePage }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles["my-swipper"]}>
      <Swiper
        direction="horizontal"
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: styles["button-disabled"],
        }}
        slideNextClass={styles["next-slide"]}
        onInit={() => setInit(true)}
        pagination={{
          clickable: true,
          clickableClass: styles.pagination,
        }}
        modules={[Navigation, Pagination]}
        className={styles.swiper}
        key={`swiper-${activePage}`}
      >
        {[...Array(data[activePage - 1][1] - data[activePage - 1][0] + 1)].map(
          (_, i) => {
            return (
              <SwiperSlide
                className={styles["swiper-slide"]}
                key={`swiper-slide-${i}-${activePage}`}
              >
                <h3 className={styles.title}>{data[activePage - 1][0] + i}</h3>
                <p className={styles.paragraf}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </SwiperSlide>
            );
          },
        )}
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
  );
};

export default SwipperCustom;
