import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import getRotationCount from "../../helpers/getRotationCount";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setPlusRotation } from "../../store/slice";
import Dot from "../Common/Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const dispatch = useAppDispatch();
  const { move, activePage, directionMotion, plusDegRotation } = useAppSelector(
    (state) => state.project,
  );
  const [activeDot, setACtiveDot] = useState(1);
  const refCircul = useRef(null);
  const refContainer = useRef(null);

  console.log("render");

  useGSAP(
    () => {
      if (move === `forward-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: "-=60",
          duration: 0.3,
          ease: "none",
        });
        setACtiveDot(activePage);
      }

      if (move === `back-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: "+=60",
          duration: 0.3,
          ease: "none",
        });
        setACtiveDot(activePage);
      }

      if (move === `click-${activePage}`) {
        gsap.to(refCircul.current, {
          rotation: `${directionMotion}=${getRotationCount(activeDot, activePage) * 60}`,
          duration: 0.3 * getRotationCount(activeDot, activePage),
          ease: "none",
        });
      }
      dispatch(
        setPlusRotation(
          plusDegRotation +
            Number(
              `${directionMotion}${getRotationCount(activeDot, activePage) * 60}`,
            ),
        ),
      );
      setACtiveDot(activePage);
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
