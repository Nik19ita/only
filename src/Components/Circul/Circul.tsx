import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import getRotationCount from "../../helpers/getRotationCount";
import { useAppSelector } from "../../hooks/ReduxHook";
import Dot from "../Common/Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const { move, activePage, directionMotion } = useAppSelector(
    (state) => state.project,
  );
  const [activeDot, setActiveDot] = useState(1);
  const refCircul = useRef(null);
  const refContainer = useRef(null);

  useGSAP(
    () => {
      if (move === `forward-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: "-=60",
          duration: 0.3,
          ease: "none",
        });
      }

      if (move === `back-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: "+=60",
          duration: 0.3,
          ease: "none",
        });
      }

      if (move === `click-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: `${directionMotion}=${getRotationCount(activeDot, activePage) * 60}`,
          duration: 0.3 * getRotationCount(activeDot, activePage),
          ease: "none",
        });
        setActiveDot(activePage);
      }
    },
    { scope: refContainer, dependencies: [move] },
  );

  return (
    <div ref={refContainer}>
      <div className={styles.circul} ref={refCircul}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return <Dot key={`list-dots${index}`} number={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default Circul;
