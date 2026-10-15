// Mega menu: hover vào "Sản phẩm", "Giải pháp"
// function initMegaMenu() {
//   const menus = document.querySelectorAll(".mega-menu");

//   menus.forEach((menu) => {
//     const cats = menu.querySelectorAll(".mega-menu__cat");
//     const panes = menu.querySelectorAll(".mega-menu__pane");
//     const crumb = menu.querySelector(".mega-menu__crumb-current");

//     cats.forEach((cat, index) => {
//       cat.addEventListener("mouseenter", () => {
//         cats.forEach((c) => c.classList.remove("mega-menu__cat--active"));
//         panes.forEach((p) => p.classList.remove("mega-menu__pane--active"));

//         cat.classList.add("mega-menu__cat--active");
//         if (panes[index]) panes[index].classList.add("mega-menu__pane--active");
//         if (crumb) crumb.textContent = cat.textContent.trim();
//       });
//     });
//   });
// }
