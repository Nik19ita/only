/* eslint-disable react/function-component-definition */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../../assets/img/arrow-swiper.svg?react";
import styles from "./Swiper.module.scss";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

// import required modules

import { Navigation } from "swiper/modules";

const SwipperWraper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigation = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
    disabledClass: styles["button-disabled"],
  };
  return (
    <div className={styles.mySwipper}>
      <Swiper
        direction="horizontal"
        spaceBetween={30}
        slidesPerView={4}
        navigation={navigation}
        modules={[Navigation]}
        onInit={() => setInit(true)}
        className={styles.swiper}
      >
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles["swiper-slide"]}>Slide 1</SwiperSlide>
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
        onClick={() => console.log("asfasf")}
      >
        <Arrow />
      </button>
    </div>
  );
};

export default SwipperWraper;
