import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import getRotationCount from "../../helpers/getRotationCount";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setPlusRotation } from "../../store/slice";
import Dot from "../Common/Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const refCircul = useRef(null);
  const refContainer = useRef(null);
  const move = useAppSelector((state) => state.project.move);
  const plusRotation = useAppSelector((state) => state.project.plusRotation);
  const numberPage = useAppSelector((state) => state.project.numberPages);
  const [directionMoTion, setDirectionMoTion] = useState("");
  const [activeDot, setActiveDot] = useState(1);
  const dispatch = useAppDispatch();

  const getDirectionMoTion = (rotate: number) => {
    if (rotate === 0 || rotate === -60 || rotate === -120) {
      setDirectionMoTion("-");
    } else {
      setDirectionMoTion("+");
    }
  };

  useGSAP(
    () => {
      if (move === `forward-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: "-=60",
          duration: 1.3,
          ease: "none",
        });
      }

      if (move === `back-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: "+=60",
          duration: 1.3,
          ease: "none",
        });
      }

      if (move === `click-${numberPage}`) {
        gsap.to(refCircul.current, {
          rotation: `${directionMoTion}=${getRotationCount(activeDot, numberPage) * 60}`,
          duration: 1.3 * getRotationCount(activeDot, numberPage),
          ease: "none",
        });
        setActiveDot(numberPage);

        console.log(
          Number(
            `${directionMoTion}${getRotationCount(activeDot, numberPage) * 60}`,
          ),
        );
        dispatch(
          setPlusRotation(
            plusRotation +
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
          return (
            <Dot
              key={`list-dots${index}`}
              number={index + 1}
              getDirectionMoTion={getDirectionMoTion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Circul;
