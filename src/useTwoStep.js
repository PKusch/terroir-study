import { useEffect, useRef, useState } from "react";

// For an action that cannot be undone: the first click arms it, the second does it.
// If nobody clicks again within `ms`, it disarms, so a stray click never sticks.
export function useTwoStep(action, ms = 4000) {
  const [armed, setArmed] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const trigger = () => {
    if (armed) {
      clearTimeout(timer.current);
      setArmed(false);
      action();
    } else {
      setArmed(true);
      timer.current = setTimeout(() => setArmed(false), ms);
    }
  };
  return [armed, trigger];
}
