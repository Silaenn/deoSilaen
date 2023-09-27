import { useState } from "react";

export const useAGe = (initialVal = 0) => {
  const [state, setState] = useState(initialVal);

  const Increase = () => {
    setState(state + 1);
  };

  const Descrease = () => {
    setState(state - 1);
  };

  const setToZero = () => {
    setState(0);
  };

  return { state, Increase, Descrease, setToZero };
};
