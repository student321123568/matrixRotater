import { useState } from "react";

import { Header } from "./components/header/ui";
import { SizeSelectors } from "./components/select/ui";
import { MatrixInput } from "./components/matrixInput/ui";

import "./App.scss";

function App() {
  const [size1, setSize1] = useState(3);
  const [size2, setSize2] = useState(3);

  const onSize1ChangeHandler = (value: number): void => {
    setSize1(value);
  };

  const onSize2ChangeHandler = (value: number): void => {
    setSize2(value);
  };

  return (
    <div>
      <Header />
      <SizeSelectors onChange1={onSize1ChangeHandler} onChange2={onSize2ChangeHandler} value1={size1} value2={size2} />
      <MatrixInput rows={size1} cols={size2} onChange={console.log} />
    </div>
  );
}

export default App;
