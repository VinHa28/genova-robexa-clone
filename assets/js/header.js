function initHeader() {
  const header = document.querySelector(".header");

  if (!header) return;

  const placeholder = document.createElement("div");
  header.before(placeholder);

  const THRESHOLD = 200;
  let lastScroll = window.scrollY;

  function onScroll() {
    const y = window.scrollY;
    const isSticky = y > THRESHOLD;
    const isUp = y < lastScroll;

    header.classList.toggle("header--sticky", isSticky);
    header.classList.toggle("header--up", isSticky && isUp);
    placeholder.style.height = isSticky ? header.offsetHeight + "px" : "0";

    lastScroll = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}
