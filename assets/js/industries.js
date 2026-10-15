function initIndustries() {
  const toggles = document.querySelectorAll(".industries-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const card = toggle.closest(".industries-card");

      if (!card) return;
      const isOpen = card.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
}
