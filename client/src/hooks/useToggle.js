import { useState } from "react";

export const useToggle = initValue => {
  const [state, setState] = useState(initValue);

  const handleToggle = () => {
    setState(!state);
  };
  return [state, handleToggle];
};
