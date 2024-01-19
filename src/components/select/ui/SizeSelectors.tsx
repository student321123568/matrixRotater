import { Select } from "antd";

import { options } from "../const/options";

import styles from "./SizeSelectors.module.scss";

interface IProps {
  value1: number;
  value2: number;
  onChange1: (value: number) => void;
  onChange2: (value: number) => void;
}

export const SizeSelectors = ({ value1, onChange1, value2, onChange2 }: IProps) => {
  return (
    <div className={styles.sizeSelectors}>
      <div className={styles.container}>
        <span>Выберите размеры матрицы:</span>
        <Select onChange={onChange1} value={value1} defaultValue={3} style={{ width: 120 }} options={options} />
        <Select onChange={onChange2} value={value2} defaultValue={3} style={{ width: 120 }} options={options} />
      </div>
    </div>
  );
};
