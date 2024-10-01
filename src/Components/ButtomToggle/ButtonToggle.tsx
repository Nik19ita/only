/// <reference types="vite-plugin-svgr/client" />
import ArrowBack from "../../assets/img/arrow-back.svg?react";
import ArrowForward from "../../assets/img/arrow-forward.svg?react";
import styles from "./ButtonToggle.module.scss";

import { FC } from "react";

interface IButtonToggleProps {
  type: "forward" | "back";
  disabled: boolean;
  onClick: () => void;
  styleButton: boolean;
}

const ButtonToggle: FC<IButtonToggleProps> = ({
  type,
  disabled,
  onClick,
  styleButton,
}) => {
  const buttonState = styleButton ? styles.disabled : styles.active;

  return (
    <button
      className={[styles.button, buttonState].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {type === "forward" && <ArrowForward />}
      {type === "back" && <ArrowBack />}
    </button>
  );
};

export default ButtonToggle;
