import { useEffect } from "react";

/**
 * Custom hook to lock or unlock the body scroll based on the provided flag.
 *
 * @function useScrollLock
 * @param isLocked - Flag indicating whether the scroll should be locked or unlocked.
 */

export function useScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
    };
  }, [isLocked]);
}
