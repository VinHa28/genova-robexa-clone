const heroSlides = [
  {
    img: "./assets/images/hero_sliders/slide_1_img.webp",
    alt: "slider-1",
    eyebrow: "Robot PUDU tại Việt Nam",
    title: "Robot phục vụ cho nhà hàng và khách sạn",
    desc: "Tự động hóa việc phục vụ, giảm tải cho nhân viên và tăng trải nghiệm khách hàng.",
    btnText: "Nhận tư vấn",
    btnLink: "#",
  },
  {
    img: "./assets/images/hero_sliders/slide_2_img.webp",
    alt: "slider-2",
    eyebrow: "Robot vệ sinh công nghiệp",
    title: "Vệ sinh sàn nhà xưởng tự động 24/7",
    desc: "Robot lau sàn và hút bụi, hoạt động liên tục mà không cần giám sát.",
    btnText: "Nhận tư vấn",
    btnLink: "#",
  },
  {
    img: "./assets/images/hero_sliders/slide_3_img.webp",
    alt: "slider-3",
    eyebrow: "Robot vận chuyển",
    title: "Vận chuyển hàng hóa trong kho và bệnh viện",
    desc: "Robot tự định tuyến, tránh vật cản và phối hợp với hệ thống hiện có.",
    btnText: "Nhận tư vấn",
    btnLink: "#",
  },
  {
    img: "./assets/images/hero_sliders/slide_4_img.webp",
    alt: "slider-4",
    eyebrow: "Giải pháp trọn gói",
    title: "Tư vấn, triển khai và bảo trì tại chỗ",
    desc: "Đội ngũ Robexa đồng hành từ khảo sát mặt bằng đến vận hành thực tế.",
    btnText: "Nhận tư vấn",
    btnLink: "#",
  },
];

function renderHero(slides) {
  const slider = document.querySelector(".hero__slider");
  const dotsWrap = document.querySelector(".hero__dots");

  if (!slider || !dotsWrap) return;

  slider.innerHTML = "";
  dotsWrap.innerHTML = "";

  slides.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "hero__slide";
    if (index === 0) slide.classList.add("hero__slide--active");

    slide.innerHTML = `
      <img class="hero__img" src="${item.img}" alt="${item.alt}" />
      <div class="container hero__content">
        <p class="hero__index">${String(index + 1).padStart(2, "0")}</p>
        <p class="hero__eyebrow">${item.eyebrow}</p>
        <h1 class="hero__title">${item.title}</h1>
        <p class="hero__desc">${item.desc}</p>
        <a href="${item.btnLink}" class="hero__btn">${item.btnText}</a>
      </div>
    `;
    slider.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "hero__dot";
    if (index === 0) dot.classList.add("hero__dot--active");
    dotsWrap.appendChild(dot);
  });
}

// Hero slider
function initHero() {
  renderHero(heroSlides);

  const hero = document.querySelector(".hero");
  const slides = document.querySelectorAll(".hero__slide");
  const dots = document.querySelectorAll(".hero__dot");
  const prevBtn = document.querySelector(".hero__arrow--prev");
  const nextBtn = document.querySelector(".hero__arrow--next");

  if (!hero || slides.length === 0) return;

  const INTERVAL = 5000;

  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides[current].classList.remove("hero__slide--active");
    dots[current].classList.remove("hero__dot--active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("hero__slide--active");
    dots[current].classList.add("hero__dot--active");
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => showSlide(current + 1), INTERVAL);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  nextBtn.addEventListener("click", () => {
    showSlide(current + 1);
    startAuto();
  });

  prevBtn.addEventListener("click", () => {
    showSlide(current - 1);
    startAuto();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAuto();
    });
  });

  hero.addEventListener("mouseenter", stopAuto);
  hero.addEventListener("mouseleave", startAuto);

  startAuto();
}
