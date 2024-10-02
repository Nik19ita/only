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
  const plusRotate = useAppSelector((state) => state.project.plusRotation);
  const directionMoTion = useAppSelector(
    (state) => state.project.directionMotion,
  );
  const numberPage = useAppSelector((state) => state.project.numberPages);
  const move = useAppSelector((state) => state.project.move);
  const refCircul = useRef(null);
  const refContainer = useRef(null);
  const [activeDot, setActiveDot] = useState(1);

  useGSAP(
    () => {
      if (move === `forward-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: "-=60",
          duration: 1.3,
          ease: "none",
        });
        setActiveDot(numberPage);
        dispatch(setPlusRotation(plusRotate - 60));
      }

      if (move === `back-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: "+=60",
          duration: 1.3,
          ease: "none",
        });
        setActiveDot(numberPage);
        dispatch(setPlusRotation(plusRotate + 60));
      }

      if (move === `click-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: `${directionMoTion}=${getRotationCount(activeDot, numberPage) * 60}`,
          duration: 1.3 * getRotationCount(activeDot, numberPage),
          ease: "none",
        });
        setActiveDot(numberPage);
        dispatch(
          setPlusRotation(
            plusRotate +
              Number(
                `${directionMoTion}${getRotationCount(activeDot, numberPage) * 60}`,
              ),
          ),
        );
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
