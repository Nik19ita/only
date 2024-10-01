import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHook";
import { setMove, setNumberPages } from "../../../store/slice";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
  getDirectionMoTion: (rotate: number) => void;
}

const Dot: FC<IDotProps> = ({ number, getDirectionMoTion }) => {
  const dispatch = useAppDispatch();
  const plusRotation = useAppSelector((state) => state.project.plusRotation);

  const degValue = number * 60 - 120;
  const rotate = -degValue - plusRotation;

  const onClick = () => {
    dispatch(setNumberPages(number));
    dispatch(setMove(`click-${number}`));
    getDirectionMoTion(rotate);
  };

  return (
    <div
      className={styles.wrapper}
      style={{ transform: `rotate(${degValue}deg) translateX(266px)` }}
    >
      <div
        onClick={onClick}
        className={styles.dot}
        style={{
          rotate: `${rotate}deg`,
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default Dot;
