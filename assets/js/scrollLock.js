const blockKeys = new Set([
  "Space",
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
]);

function preventDefault(e) {
  e.preventDefault();
}
function onKeyDown(e) {
  if (!blockKeys.has(e.code)) return;
  const el = e.target;
  const tag = el && el.tagName ? el.tagName.toLowerCase() : "";
  if (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    el?.isContentEditable
  )
    return;
  e.preventDefault();
}

let locked = false;
let prevDocOverflow = "";

/**
 * @description
 * Window-level scroll lock utility.
 */
export const scrollLock = {
  lock() {
    if (locked) return;
    locked = true;
    prevDocOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("no-scroll");
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
  },
  unlock() {
    if (!locked) return;
    locked = false;
    document.documentElement.style.overflow = prevDocOverflow || "";
    document.body.classList.remove("no-scroll");
    window.removeEventListener("wheel", preventDefault, { passive: false });
    window.removeEventListener("touchmove", preventDefault, { passive: false });
    window.removeEventListener("keydown", onKeyDown, { passive: false });
  },
};
