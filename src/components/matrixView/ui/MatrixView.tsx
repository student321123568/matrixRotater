import { Input } from "antd";

import styles from "./MatrixView.module.scss";

interface IProps {
  result: number[][] | string;
}

export const MatrixView = ({ result }: IProps) => {
  if (typeof result === "string") {
    return (
      <div className={styles.matrixView}>
        <div className={styles.container}>
          <h3 className={styles.title + " " + styles.centered}>{result}</h3>
        </div>
      </div>
    );
  }

  if (result.length === 0) {
    return (
      <div className={styles.matrixView}>
        <div className={styles.container}>
          <h3 className={styles.title + " " + styles.centered}>Введите значения и нажмите на кнопку</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.matrixView}>
      <div className={styles.container}>
        <h3 className={styles.title}>Результат: </h3>
        {result.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((_, colIndex) => (
              <Input size="small" maxLength={50} key={colIndex} type="number" value={result[rowIndex][colIndex]} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
