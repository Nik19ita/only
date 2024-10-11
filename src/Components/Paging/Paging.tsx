import { useState } from "react";
import getRotationCount from "../../helpers/getRotationCount.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook.ts";
import {
  setActivePages,
  setDirectionMotion,
  setRotationCount,
} from "../../store/slice.ts";
import ButtonToggle from "../ButtonToggle/ButtonToggle.tsx";
import styles from "./Paging.module.scss";

const Paging = () => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector((state) => state.project.activePage);
  const [disabled, setDisabled] = useState(false);

  const clickButtonBack = () => {
    if (activePage > 1) {
      dispatch(setActivePages(activePage - 1));
      dispatch(setRotationCount(getRotationCount(activePage, activePage - 1)));
      dispatch(setDirectionMotion("+"));
      isDisabled();
    }
  };

  const clickButtonForward = () => {
    if (activePage < 6) {
      dispatch(setActivePages(activePage + 1));
      dispatch(setRotationCount(getRotationCount(activePage, activePage + 1)));
      dispatch(setDirectionMotion("-"));
      isDisabled();
    }
  };

  const isDisabled = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 300);
  };

  return (
    <div className={styles.toogle}>
      <p className={styles.paragraf}>{`0${activePage}/06`}</p>

      <div>
        <ButtonToggle
          type="back"
          disabled={activePage === 1 || disabled}
          styleButton={activePage === 1}
          onClick={clickButtonBack}
        />
        <ButtonToggle
          type="forward"
          disabled={activePage === 6 || disabled}
          styleButton={activePage === 6}
          onClick={clickButtonForward}
        />
      </div>
    </div>
  );
};

export default Paging;
