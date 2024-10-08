import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import {
  setActivePages,
  setDirectionMotion,
  setPosition,
} from "../../store/slice";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
}

const Dot: FC<IDotProps> = ({ number }) => {
  const dispatch = useAppDispatch();
  const { positionActiveDot, plusDegRotation } = useAppSelector(
    (state) => state.project,
  );

  const refDot = useRef<HTMLDivElement>(null);
  const degRotate = number * 60 - 120;

  useEffect(() => {
    if (number === 1) {
      const position = refDot.current!.getBoundingClientRect();
      dispatch(
        setPosition({ x: Math.trunc(position.x), y: Math.trunc(position.y) }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    const position = refDot.current!.getBoundingClientRect();
    if (
      Math.trunc(position.x) === positionActiveDot.x &&
      Math.trunc(position.y) === positionActiveDot.y
    ) {
      return;
    } else {
      dispatch(setActivePages(number));

      if (Math.trunc(position.x) >= positionActiveDot.x) {
        dispatch(setDirectionMotion("-"));
      } else {
        dispatch(setDirectionMotion("+"));
      }
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `rotate(${degRotate}deg) translateX(266px)` }}
      onClick={onClick}
      ref={refDot}
    >
      <div
        className={styles.dot}
        style={{
          rotate: `${-degRotate - plusDegRotation}deg`,
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default Dot;
