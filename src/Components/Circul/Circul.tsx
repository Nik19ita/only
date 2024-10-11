import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setPlusRotation } from "../../store/slice";
import Dot from "../Dot/Dot";
import styles from "./Circul.module.scss";

const Circul = () => {
  const dispatch = useAppDispatch();
  const { activePage, rotationCount, directionMotion, plusDegRotation } =
    useAppSelector((state) => state.project);

  const refContainer = useRef(null);
  const refCircul = useRef(null);

  useGSAP(
    () => {
      gsap.to(refCircul.current, {
        rotation: `${directionMotion}=${rotationCount * 60}`,
        duration: 0.3 * rotationCount,
        ease: "none",
      });
      dispatch(
        setPlusRotation(
          plusDegRotation + Number(`${directionMotion}${rotationCount * 60}`),
        ),
      );
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
