import { useState } from "react";

import { Header } from "./components/header/ui";
import { SizeSelectors } from "./components/select/ui";
import { MatrixInput } from "./components/matrixInput/ui";
import { MatrixReverser } from "./components/matrixReverser/ui";
import { MatrixView } from "./components/matrixView/ui";

import styles from "./App.module.scss";
import "./styles/App.scss";

function App() {
  const [size1, setSize1] = useState(3);
  const [size2, setSize2] = useState(3);
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [result, setResult] = useState<string | number[][]>([]);

  console.log("ITS MATRIX!!!!", result);

  const onSize1ChangeHandler = (value: number): void => {
    setSize1(value);
  };

  const onSize2ChangeHandler = (value: number): void => {
    setSize2(value);
  };

  const onMatrixChange = (value: string[][]): void => {
    setMatrix(value);
  };

  const onMatrixReverse = (value: string | number[][]): void => {
    setResult(value);
  };

  return (
    <div>
      <Header />
      <div className={styles.control}>
        <SizeSelectors
          onChange1={onSize1ChangeHandler}
          onChange2={onSize2ChangeHandler}
          value1={size1}
          value2={size2}
        />
        <MatrixReverser className={styles.button} matrix={matrix} onChange={onMatrixReverse} />
      </div>
      <MatrixInput rows={size1} cols={size2} onChange={onMatrixChange} />
      <MatrixView result={result} />
    </div>
  );
}

export default App;
