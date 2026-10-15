const MATCH_PRODUCTS = [
  {
    title: "Robot phục vụ BellaBot Pro",
    desc: "Dịch vụ & Giao hàng cao cấp",
    url: "https://robexa.vn/products/robot-phuc-vu-bellabot-pro",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-phuc-vu-bellabot-pro_cbb8391b34d34c20910ee1277f775532_grande.webp",
    coll: "Nhà hàng & F&B",
    tags: [
      "Phổ thông",
      "Giao món & bưng khay",
      "Chỉ một robot để bắt đầu",
      "Tiếp đón & dẫn khách",
      "Kết hợp nhiều công việc",
      "Lớn - trên 2000 m2",
      "Trung bình - 500 - 2000 m2",
    ],
  },
  {
    title: "Robot phục vụ FlashBot Arm",
    desc: "Robot phục vụ bán nhân hình có cánh tay",
    url: "https://robexa.vn/products/robot-phuc-vu-flashbot-arm",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-phuc-vu-flashbot-arm-pudu_a9272058f7f94238ab627934f6e81ee5_grande.png",
    coll: "Nhà hàng & F&B",
    tags: ["Tiếp đón & dẫn khách", "Kết hợp nhiều công việc"],
  },
  {
    title: "Robot phục vụ KettyBot Pro",
    desc: "Giao hàng + Lễ tân",
    url: "https://robexa.vn/products/robot-phuc-vu-kettybot-pro",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-phuc-vu-kettybot-pro_fa0ffe6890994f2a8dee091fa108a014_grande.webp",
    coll: "Nhà hàng & F&B",
    tags: [
      "Nhỏ — dưới 500 m²",
      "Phổ thông",
      "Chỉ một robot để bắt đầu",
      "Giao món & bưng khay",
      "Tiếp đón & dẫn khách",
      "Kết hợp nhiều công việc",
    ],
  },
  {
    title: "Robot phục vụ PuduBot 2",
    desc: "Giao hàng đa năng",
    url: "https://robexa.vn/products/robot-phuc-vu-pudubot-2",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-phuc-vu-pudubot-2_be4e61e5013642908d99eba1e8ccf6cf_grande.webp",
    coll: "Nhà hàng & F&B",
    tags: [
      "Đội robot nhỏ (2 đến 5)",
      "Phổ thông",
      "Giao món & bưng khay",
      "Kết hợp nhiều công việc",
      "Tiếp đón & dẫn khách",
      "Trung bình - 500 - 2000 m2",
    ],
  },
  {
    title: "Robot vệ sinh CC1",
    desc: "Robot vệ sinh AI 4-trong-1",
    url: "https://robexa.vn/products/robot-ve-sinh-cc1",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-ve-sinh-cc1_6723b5467319407d968898e97d98965e_grande.webp",
    coll: "Nhà hàng & F&B",
    tags: ["Vệ sinh & khử khuẩn sàn"],
  },
  {
    title: "Robot vệ sinh SH1",
    desc: "Máy chà rửa và làm khô sàn thông minh",
    url: "https://robexa.vn/products/robot-ve-sinh-sh1",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-ve-sinh-sh1_e17e3a21204e48e8bf77047195331403_grande.webp",
    coll: "Nhà hàng & F&B",
    tags: ["Vệ sinh & khử khuẩn sàn"],
  },
  {
    title: "Robot giao hàng Flashbot",
    desc: "Robot giao hàng khoang kín",
    url: "https://robexa.vn/products/robot-giao-hang-flashbot",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-giao-hang-flashbot_ff043ea54c874bf285a70fcb728ede53_grande.webp",
    coll: "Khách sạn & lưu trú",
    tags: ["Vệ sinh & khử khuẩn sàn"],
  },
  {
    title: "Robot vệ sinh BG1",
    desc: "Máy chà sàn liên hợp cỡ lớn thuần AI",
    url: "https://robexa.vn/products/robot-ve-sinh-bg1",
    image:
      "https://cdn.hstatic.net/products/200001202310/bg11-cut_3e6b0028f1d6438d980ccecc3841d4a6_grande.webp",
    coll: "Khách sạn & lưu trú",
    tags: ["Vệ sinh & khử khuẩn sàn"],
  },
  {
    title: "Robot vệ sinh MT1",
    desc: "Robot quét AI",
    url: "https://robexa.vn/products/robot-ve-sinh-mt1",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-ve-sinh-mt1_8591ae550aa6428fb8f4b1f674ccdf0c_grande.webp",
    coll: "Khách sạn & lưu trú",
    tags: ["Vệ sinh & khử khuẩn sàn"],
  },
  {
    title: "Robot cắt cỏ GT3",
    desc: "Robot cắt cỏ thương mại nhỏ gọn 2 trong 1",
    url: "https://robexa.vn/products/robot-cat-co-gt3",
    image:
      "https://cdn.hstatic.net/products/200001202310/gt3_2fa7175c3d9645269cd0f0207ce547f6_grande.png",
    coll: "Nhà máy & Kho bãi",
    tags: [],
  },
  {
    title: "Robot vận chuyển T150",
    desc: "AMR công nghiệp tải trọng nhẹ",
    url: "https://robexa.vn/products/robot-van-chuyen-t150",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-van-chuyen-t150_d0baf8138bc44b2c92e6567e71639064_grande.webp",
    coll: "Nhà máy & Kho bãi",
    tags: [
      "Vận chuyển vật liệu & Pallet",
      "Tầm trung",
      "Cao cấp — dẫn đầu phân khúc",
      "Đội robot lớn hơn (6 hoặc nhiều hơn)",
      "Chưa chắc chắn",
      "Tôi muốn được tư vấn",
    ],
  },
  {
    title: "Robot vận chuyển T300",
    desc: "AMR công nghiệp 300 kg",
    url: "https://robexa.vn/products/robot-van-chuyen-t300",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-van-chuyen-t300_966cd2c875a94834b99b835e56fe39e2_grande.webp",
    coll: "Nhà máy & Kho bãi",
    tags: [
      "Vận chuyển vật liệu & Pallet",
      "Đội robot lớn hơn (6 hoặc nhiều hơn)",
      "Chưa chắc chắn",
      "Cao cấp — dẫn đầu phân khúc",
      "Tầm trung",
      "Tôi muốn được tư vấn",
      "Lớn - trên 2000 m2",
      "Trung bình - 500 - 2000 m2",
      "Nhỏ — dưới 500 m²",
    ],
  },
  {
    title: "Robot vận chuyển T600",
    desc: "AMR công nghiệp tải trọng nặng",
    url: "https://robexa.vn/products/robot-van-chuyen-t600",
    image:
      "https://cdn.hstatic.net/products/200001202310/robot-van-chuyen-t600_959b74c78b7e44f9ba3e1189d03976f4_grande.webp",
    coll: "Nhà máy & Kho bãi",
    tags: [
      "Vận chuyển vật liệu & Pallet",
      "Nhiều địa điểm",
      "Tôi muốn được tư vấn",
      "Chưa chắc chắn",
      "Đội robot lớn hơn (6 hoặc nhiều hơn)",
      "Tầm trung",
      "Cao cấp — dẫn đầu phân khúc",
      "Lớn - trên 2000 m2",
    ],
  },
  {
    title: "Robot vận chuyển T600 Underride",
    desc: "Giao hàng công nghiệp · AMR tải trọng nặng",
    url: "https://robexa.vn/products/robot-van-chuyen-t600-underride",
    image:
      "https://cdn.hstatic.net/products/200001202310/t600_u_342d3559b47545dd8bf9006c71d0c493_grande.png",
    coll: "Nhà máy & Kho bãi",
    tags: [],
  },
];

function initMatch() {
  // <div class="match-quiz"> - khung chứa toàn bộ các câu hỏi, ẩn đi khi hiện kết quả
  const quiz = document.getElementById("matchQuiz");
  if (!quiz) return;

  const steps = [...quiz.querySelectorAll(".match-step")];
  const total = steps.length;
  const bar = document.getElementById("matchBar");
  const stepNow = document.getElementById("matchStepNow");
  const stepTotal = document.getElementById("matchStepTotal");
  const backBtn = document.getElementById("matchBack");
  const result = document.getElementById("matchResult");
  const combo = document.getElementById("matchCombo");
  const restartBtn = document.getElementById("matchRestart");
  const budgetInput = document.getElementById("matchBudgetInput");
  const budgetGo = document.getElementById("matchBudgetGo");

  let current = 0;
  let answers = [];

  function render() {
    steps.forEach((step, i) =>
      step.classList.toggle("is-active", i === current),
    );
    stepNow.textContent = current + 1;
    bar.style.width = ((current + 1) / total) * 100 + "%";
    backBtn.hidden = current === 0;
  }

  function getMatches() {
    const industry = answers[0];
    const picks = answers.slice(1);

    let pool = MATCH_PRODUCTS.filter((p) => p.coll === industry);

    if (pool.length === 0) pool = MATCH_PRODUCTS;

    return pool
      .map((p) => ({
        p,
        score: picks.filter((a) => p.tags.includes(a)).length,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map((x) => x.p);
  }

  // TODO: showResult() - ẩn quiz, hiện result, tạo <li class="match-combo-item"> cho từng sản phẩm trong getMatches()
  function showResult() {
    quiz.hidden = true;
    result.hidden = false;

    combo.innerHTML = "";
    getMatches().forEach((p) => {
      const li = document.createElement("li");
      li.className = "match-combo-item";
      li.innerHTML = `
       <a href="${p.url}" class="match-combo-thumb"><img src="${p.image}" alt="${p.title}" loading="lazy" /></a>
      <a href="${p.url}" class="match-combo-model">${p.title}</a>
      <p class="match-combo-role">${p.desc}</p>
      `;
      combo.appendChild(li);
    });
  }

  // TODO: gắn click cho từng .match-opt trong step: đánh dấu is-selected, lưu answers[i], chuyển câu sau 220ms
  steps.forEach((step, i) => {
    const options = [...step.querySelectorAll(".match-opt")];

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        options.forEach((o) => o.classList.remove("is-selected"));
        opt.classList.add("is-selected");
        answers[i] = opt.textContent.replace(/\s+/g, " ").trim();

        setTimeout(() => {
          if (current < total - 1) {
            current++;
            render();
          } else {
            showResult();
          }
        }, 200);
      });
    });
  });

  // TODO: backBtn click - lùi một câu
  backBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      render();
    }
  });
  // TODO: restartBtn click - reset current, answers, bỏ is-selected, ẩn result, hiện quiz
  restartBtn.addEventListener("click", () => {
    current = 0;
    answers = [];
    quiz
      .querySelectorAll(".match-opt.is-selected")
      .forEach((o) => o.classList.remove("is-selected"));
    budgetInput.value = "";
    result.hidden = true;
    quiz.hidden = false;
    render();
  });

  // Ô nhập ngân sách ở câu 5: bấm "XEM GỢI Ý CHO TÔI" là hiện kết quả luôn, giống trang gốc.
  // Số tiền nhập vào không đưa vào chấm điểm, nên không cần lưu vào answers.
  budgetGo.addEventListener("click", () => {
    showResult();
  });

  // TODO: gọi render() lần đầu
  render();
}
