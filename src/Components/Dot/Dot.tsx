import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import {
  setActivePages,
  setDirectionMotion,
  setMove,
  setMoveBoolean,
  setPosition,
} from "../../store/slice";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
}

const Dot: FC<IDotProps> = ({ number }) => {
  const dispatch = useAppDispatch();
  const { positionX, plusDegRotation } = useAppSelector(
    (state) => state.project,
  );

  const refDot = useRef<HTMLDivElement>(null);
  const degRotate = number * 60 - 120;

  useEffect(() => {
    if (number === 1) {
      const position = refDot.current!.getBoundingClientRect();
      dispatch(setPosition(Math.trunc(position.x)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => {
    dispatch(setActivePages(number));
    dispatch(setMove(`click-${number}`));
    dispatch(setMoveBoolean(false));
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
