import { useEffect, useState } from "react";
import { Input } from "antd";

import { generateMatrix } from "../utils/generateMatrix";

import styles from "./MatrixInput.module.scss";

interface IProps {
  rows: number;
  cols: number;
  onChange: (val: string[][]) => void;
}

export const MatrixInput = ({ rows, cols, onChange }: IProps) => {
  const [matrix, setMatrix] = useState(generateMatrix(rows, cols));

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = value;
    setMatrix(newMatrix);
    onChange(newMatrix);
  };

  useEffect(() => {
    setMatrix(generateMatrix(rows, cols));
  }, [rows, cols]);

  return (
    <div className={styles.matrixInput}>
      <div className={styles.container}>
        {matrix.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row.map((_, colIndex) => (
              <Input
                placeholder="Введите число"
                size="small"
                maxLength={50}
                key={colIndex}
                type="number"
                value={matrix[rowIndex][colIndex]}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
