import { useState, useContext, useEffect } from "react";

export const useToogle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toogle = () => {
    setState((prev) => !prev);
  };

  return [state, toogle];
};
