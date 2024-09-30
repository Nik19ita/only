import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import styles from "./Dot.module.scss";

interface IDotProps {
  number: number;
  action?: string | null;
}

const Dot: FC<IDotProps> = ({ number }) => {

  const [degValue, setDegValue] = useState(number * 60);

  const keyframeName = keyframes`
    0% { transform: rotate(${degValue}deg}) translateX(265.5px); }
    100% { transform: rotate(${degValue}deg) translateX(265.5px); }
  `;

  const Dot = styled.div`
    transform: rotate(${number * 60}deg);
    animation: ${keyframeName} 1s 1 linear forwards;
  `;

  return (
    <Dot className={styles.wrapper}>
      <div className={styles.dot} style={{ rotate: `${360 - degValue}deg` }}>
        {number}
      </div>
    </Dot>
  );
};

export default Dot;
