import { useEffect } from "react";

export function useKeyBinding(key: string, handler: () => void) {
  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === key) {
        handler();
      }
    }
    document.addEventListener("keypress", listener);
    return () => {
      document.removeEventListener("keypress", listener);
    };
  }, [key, handler]);
}
