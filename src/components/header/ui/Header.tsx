import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>Вычислить матрицу обратно заданной</div>
    </header>
  );
};
