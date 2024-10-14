"use client";
import { useEffect } from "react";

export function useClickOutsideListener<T extends HTMLElement>(
  containerRef: React.RefObject<T>,
  callback: () => void,
  deps?: any[]
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !containerRef.current ||
        containerRef.current.contains(event.target as any)
      ) {
        return;
      }
      callback();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [deps]);
}
