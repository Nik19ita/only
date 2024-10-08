import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import getRotationCount from "../../helpers/getRotationCount";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setPlusRotation } from "../../store/slice";
import Dot from "../Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const dispatch = useAppDispatch();
  const { activePage, directionMotion, plusDegRotation } = useAppSelector(
    (state) => state.project,
  );

  const [activeDot, setACtiveDot] = useState(1);

  const refContainer = useRef(null);
  const refCircul = useRef(null);

  useGSAP(
    () => {
      if (activePage !== activeDot) {
        console.log("asfasf");
        gsap.to(refCircul.current, {
          rotation: `${directionMotion}=${getRotationCount(activeDot, activePage) * 60}`,
          duration: 0.3 * getRotationCount(activeDot, activePage),
          ease: "none",
        });
        dispatch(
          setPlusRotation(
            plusDegRotation +
              Number(
                `${directionMotion}${getRotationCount(activeDot, activePage) * 60}`,
              ),
          ),
        );
        setACtiveDot(activePage);
      }
    },
    { scope: refContainer, dependencies: [activePage] },
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
