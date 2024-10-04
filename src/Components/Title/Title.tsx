import styles from "./Titile.module.scss";

const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.gradient} />
      <p className={styles.text}>Исторические даты</p>
    </div>
  );
};

export default Title;
