import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHook";
import {
  setDirectionMotion,
  setMove,
  setNumberPages,
  setPosition,
} from "../../../store/slice";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
}

const Dot: FC<IDotProps> = ({ number }) => {
  const plusRotate = useAppSelector((state) => state.project.plusRotation);
  const dispatch = useAppDispatch();
  const positionX = useAppSelector((state) => state.project.position.x);
  const refDot = useRef<HTMLDivElement>(null);

  const degValue = number * 60 - 120;

  useEffect(() => {
    if (number === 1) {
      const position = refDot.current!.getBoundingClientRect();
      dispatch(
        setPosition({ x: Math.trunc(position.x), y: Math.trunc(position.x) }),
      );
    }
  }, [dispatch, number]);

  const onClick = () => {
    dispatch(setNumberPages(number));
    dispatch(setMove(`click-${number}`));
    const position = refDot.current!.getBoundingClientRect();

    if (Math.trunc(position.x) + 10 > positionX) {
      dispatch(setDirectionMotion("-"));
    } else {
      dispatch(setDirectionMotion("+"));
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `rotate(${degValue}deg) translateX(266px)` }}
      onClick={onClick}
      ref={refDot}
    >
      <div
        className={styles.dot}
        style={{
          rotate: `${-degValue - plusRotate}deg`,
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default Dot;
