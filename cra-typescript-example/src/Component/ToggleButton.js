import React from "react";
import useToggle from "../Hooks/useToggle";

const ToggleButton = () => {
  const [show, toggle] = useToggle(false);
  return (
    <button onClick={toggle}> {show ? "Collapse ⬆️" : "Expand ⬇️"}</button>
  );
};

export default ToggleButton;
