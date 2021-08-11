import { useCallback, useState } from "react";

const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => {
    setState(!state);
  }, [setState, state]);

  return [state, toggle] as const;
};

export default useToggleState;
