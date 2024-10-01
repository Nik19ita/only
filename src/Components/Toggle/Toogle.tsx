import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHook";
import { setMove, setNumberPages } from "../../store/slice.ts";
import ButtonToggle from "../ButtomToggle/ButtonToggle";
import styles from "./Toogle.module.scss";

const Toggle = () => {
  const dispatch = useAppDispatch();
  const numberPage = useAppSelector((state) => state.project.numberPages);
  const [Disabled, setDisabled] = useState(false);

  const clickButtonBack = () => {
    if (numberPage > 1) {
      dispatch(setNumberPages(numberPage - 1));
      dispatch(setMove(`back-${numberPage - 1}`));
      isDisabled();
    }
  };

  const clickButtonForward = () => {
    if (numberPage < 6) {
      dispatch(setNumberPages(numberPage + 1));
      dispatch(setMove(`forward-${numberPage + 1}`));
      isDisabled();
    }
  };

  const isDisabled = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1300);
  };

  return (
    <div className={styles.toogle}>
      <p className={styles.paragraf}>{`0${numberPage}/06`}</p>

      <div>
        <ButtonToggle
          type="back"
          disabled={numberPage === 1 || Disabled}
          styleButton={numberPage === 1}
          onClick={clickButtonBack}
        />
        <ButtonToggle
          type="forward"
          disabled={numberPage === 6 || Disabled}
          styleButton={numberPage === 6}
          onClick={clickButtonForward}
        />
      </div>
    </div>
  );
};

export default Toggle;
