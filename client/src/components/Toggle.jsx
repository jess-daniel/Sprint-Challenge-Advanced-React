import React from "react";
import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div>
      {toggle ? <p>I like sports!!!</p> : <p>I don't like sports</p>}
      <button data-testid="button" onClick={setToggle}>
        Click Me
      </button>
    </div>
  );
};

export default Toggle;
