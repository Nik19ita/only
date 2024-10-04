import { FC, useEffect, useRef, useState } from "react";
import getRotationCount from "../../../helpers/getRotationCount";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHook";
import {
  setActivePages,
  setDirectionMotion,
  setMove,
  setPlusRotation,
  setPosition,
} from "../../../store/slice";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
}

const Dot: FC<IDotProps> = ({ number }) => {
  const dispatch = useAppDispatch();
  const { directionMotion, positionX, plusRotation, activePage } =
    useAppSelector((state) => state.project);
  const [activeDot, setACtiveDot] = useState(1);

  const refDot = useRef<HTMLDivElement>(null);
  const degRotate = number * 60 - 120;

  useEffect(() => {
    if (number === 1) {
      const position = refDot.current!.getBoundingClientRect();
      dispatch(setPosition(Math.trunc(position.x)));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(
      setPlusRotation(
        plusRotation +
          Number(
            `${directionMotion}${getRotationCount(activeDot, activePage) * 60}`,
          ),
      ),
    );
    setACtiveDot(activePage);
    console.log("+");
  }, [activeDot, activePage, directionMotion, dispatch, plusRotation]);

  const onClick = () => {
    dispatch(setActivePages(number));
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
      style={{ transform: `rotate(${degRotate}deg) translateX(266px)` }}
      onClick={onClick}
      ref={refDot}
    >
      <div
        className={styles.dot}
        style={{
          rotate: `${-degRotate - plusRotation}deg`,
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default Dot;
