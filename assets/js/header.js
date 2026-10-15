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

function initLanguage() {
  const lang = document.querySelector(".header__lang");

  if (!lang) return;

  const toggle = lang.querySelector(".header__button-language");
  const flag = lang.querySelector(".header__country-flag");
  const items = lang.querySelectorAll(".header__lang-item");

  function closeMenu() {
    lang.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = lang.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("header__lang-item--active"));
      item.classList.add("header__lang-item--active");

      flag.src = item.dataset.flag;
      flag.alt = item.dataset.lang;

      closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
