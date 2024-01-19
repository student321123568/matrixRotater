import { useCallback } from "react";
import { Button } from "antd";
import { inv } from "mathjs";

interface IProps {
  matrix: string[][];
  onChange: (result: number[][] | string) => void;
  className?: string;
}

export const MatrixReverser = ({ matrix, onChange, className }: IProps) => {
  const calculateInverse = useCallback(() => {
    try {
      const numericMatrix = matrix.map((row) => row.map((cell) => parseFloat(cell) || 0));
      const inverse = inv(numericMatrix);
      onChange(inverse);
    } catch (error) {
      const errorMessage = "Матрица не обратима";
      onChange(errorMessage);
    }
  }, [matrix, onChange]);

  return (
    <div className={className}>
      <Button type="primary" onClick={calculateInverse}>
        Вычислить обратную матрицу
      </Button>
    </div>
  );
};
