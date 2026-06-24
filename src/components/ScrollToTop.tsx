import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Manages scroll position on navigation:
 *  - If the URL has a #hash, smooth-scroll to that element (used by the
 *    Services dropdown to jump to a specific service section).
 *  - Otherwise, scroll to the top of the page.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    if (hash) {
      // Wait a tick so the target element is mounted, then scroll to it.
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior, block: "start" });
          return;
        }
        window.scrollTo({ top: 0, behavior });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior });
  }, [pathname, hash]);

  return null;
}
