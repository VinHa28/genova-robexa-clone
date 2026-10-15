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

function initMobileMenu() {
  const toggle = document.querySelector(".header__menu");
  const nav = document.querySelector(".header__nav");
  const closeBtn = document.querySelector(".nav__close");

  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add("is-open");
    document.body.classList.add("is-nav-open");
  }

  function closeNav() {
    nav.classList.remove("is-open");
    document.body.classList.remove("is-nav-open");
  }

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const item = link.parentElement;
      const hasSub = item.querySelector(".mega-menu, .dropdown");

      if (!hasSub || window.innerWidth >= 992) return;

      e.preventDefault();
      item.classList.toggle("is-open");
    });
  });
}
