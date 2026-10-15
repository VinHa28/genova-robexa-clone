document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initHeader();
  initMegaMenu();
  initMobileMenu();
  initLanguage();
  initIndustries();
  initPcards();
});

function initPcards() {
  document.querySelectorAll(".pcard").forEach((card) => {
    const video = card.querySelector("video");
    card.addEventListener("mouseenter", () => video.play());
    card.addEventListener("mouseleave", () => video.pause());
  });
}