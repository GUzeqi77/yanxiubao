const duration = 361;

const catalogGroups = [
  {
    title: "基本认识",
    items: [{ title: "《十项准则》与职业道德", time: "08:10", start: 3, active: true }]
  },
  {
    title: "内容要求",
    items: [
      { title: "《十项准则》与职业道德", time: "08:10", start: 28 },
      { title: "幼儿教师的真实情境判断", time: "08:10", start: 64 },
      { title: "家长沟通与协同育人", time: "08:10", start: 118 },
      { title: "同事协作与案例复盘", time: "08:10", start: 206 },
      { title: "规范保教行为", time: "08:10", start: 292 },
      { title: "课程重点回顾", time: "08:10", start: 334 }
    ]
  }
];

const transcript = [
  { time: "00:03", seconds: 3, text: "课程围绕《新时代幼儿园教师职业行为十项准则》，从多个关系维度解释幼儿教师职业道德要求。" },
  { time: "00:28", seconds: 28, text: "课程框架包括幼儿、专业、个人素养、家长、国家社会与同事六个维度。" },
  { time: "01:02", seconds: 62, text: "教师要把准则落实到日常保教行为中，尤其要在真实情境中做出专业判断。" },
  { time: "01:46", seconds: 106, text: "面对幼儿差异时，需要尊重发展规律，保护幼儿安全，避免片面评价。" },
  { time: "02:37", seconds: 157, text: "家长沟通强调客观反馈幼儿情况，避免夸大或否定，形成家园合力。" },
  { time: "03:26", seconds: 206, text: "与同事协作时，应围绕案例复盘、经验共享和共同研讨提升团队判断。" },
  { time: "04:52", seconds: 292, text: "规范保教行为要求教师坚守廉洁自律，不收受家长财物，不传播不当言论。" },
  { time: "05:32", seconds: 332, text: "课程建议把抽象规范转化为可观察的行为清单，持续反思并改进教育实践。" }
];

const chapters = [
  { time: "00:28", seconds: 28, title: "课程框架与六个维度", text: "介绍幼儿、专业、个人素养、家长、国家社会与同事维度。" },
  { time: "02:37", seconds: 157, title: "家长沟通与协同育人", text: "强调客观反馈幼儿情况，避免片面评价，形成家园合力。" },
  { time: "04:52", seconds: 292, title: "同事协作与案例复盘", text: "通过共同研讨提升团队专业判断，把准则转化为行动。" }
];

const infoContent = {
  guide: "<p>本课程从幼儿维度、专业维度、个人素养维度、家长维度、国家与社会维度以及同事维度，结合大量实践案例解读《新时代幼儿园教师职业行为十项准则》，帮助教师掌握提升职业素养的方法。</p>",
  expert: `
    <div class="expert-card">
      <span class="expert-avatar">陈</span>
      <div>
        <h3>陈黎明</h3>
        <p>幼儿园教师发展研究专家，长期关注师德师风建设、家园共育和教师专业成长。</p>
      </div>
    </div>
  `,
  materials: `
    <div class="material-grid">
      <button type="button">《十项准则》学习手册</button>
      <button type="button">师德案例研讨清单</button>
      <button type="button">课后反思记录表</button>
    </div>
  `,
  comments: `
    <div class="comment-list">
      <article>
        <h3>王老师</h3>
        <p>案例部分很贴近日常工作，特别适合园本教研时一起复盘。</p>
      </article>
      <article>
        <h3>李老师</h3>
        <p>家长沟通部分很实用，提醒我要把反馈讲得更客观、更具体。</p>
      </article>
    </div>
  `
};

const aiPrompts = ["这节课的三个重点", "有哪些相关学习资源", "帮我生成课后反思"];

const sideContent = document.querySelector("[data-side-content]");
const panelTabs = document.querySelectorAll("[data-panel-tab]");
const infoTabs = document.querySelectorAll("[data-info-tab]");
const infoBody = document.querySelector("[data-info-body]");
const currentTimeEl = document.querySelector("[data-current-time]");
const progressFill = document.querySelector("[data-progress-fill]");
const progressThumb = document.querySelector("[data-progress-thumb]");
const progressTrack = document.querySelector("[data-progress-track]");
const playIcon = document.querySelector("[data-play-icon]");
const centerPlay = document.querySelector(".center-play");
const toast = document.querySelector("[data-toast]");
const videoStage = document.querySelector("[data-video-stage]");
const volumeIcon = document.querySelector("[data-volume-icon]");
const aiOverlay = document.querySelector("[data-ai-overlay]");
const chatList = document.querySelector("[data-chat-list]");
const chatForm = document.querySelector("[data-chat-form]");
const mindModal = document.querySelector("[data-mind-modal]");

let activePanel = "catalog";
let currentSeconds = 3;
let isPlaying = true;
let isMuted = false;
let timer = window.setInterval(tick, 1000);

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function setTime(seconds, announce = false) {
  currentSeconds = Math.max(0, Math.min(duration, Math.round(seconds)));
  const progress = (currentSeconds / duration) * 100;
  currentTimeEl.textContent = formatTime(currentSeconds);
  progressFill.style.width = `${progress}%`;
  progressThumb.style.left = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentSeconds));
  if (announce) {
    toast.textContent = `已跳转到 ${formatTime(currentSeconds)}`;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1200);
  }
}

function tick() {
  if (!isPlaying) return;
  if (currentSeconds >= duration) {
    isPlaying = false;
    updatePlayState();
    return;
  }
  setTime(currentSeconds + 1);
}

function updatePlayState() {
  playIcon.textContent = isPlaying ? "❚❚" : "▶";
  centerPlay.classList.toggle("is-hidden", isPlaying);
}

function seekFromEvent(event) {
  const rect = progressTrack.getBoundingClientRect();
  const ratio = (event.clientX - rect.left) / rect.width;
  setTime(ratio * duration, true);
}

function renderCatalog() {
  sideContent.innerHTML = catalogGroups
    .map(
      (group) => `
        <section class="catalog-group">
          <h2>${group.title}</h2>
          <ul class="catalog-list">
            ${group.items
              .map(
                (item) => `
                  <li class="catalog-item ${item.active ? "active" : ""}">
                    <button type="button" data-seek="${item.start}">
                      <span class="play-tiny" aria-hidden="true">▶</span>
                      <span class="catalog-title">
                        <span>${item.title}</span>
                        <time>${item.time}</time>
                      </span>
                      <span class="course-pill">课件</span>
                    </button>
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>
      `
    )
    .join("");
}

function renderTranscript() {
  sideContent.innerHTML = `
    <section class="transcript-card">
      <ol class="transcript-list">
        ${transcript
          .map(
            (line) => `
              <li>
                <button type="button" data-seek="${line.seconds}">
                  <time class="time-chip">${line.time}</time>
                  <span class="transcript-text">${line.text}</span>
                </button>
              </li>
            `
          )
          .join("")}
      </ol>
    </section>
  `;
}

function renderSummary() {
  sideContent.innerHTML = `
    <div class="summary-stack">
      <section class="summary-card">
        <div class="mind-header">
          <h2><span class="icon" aria-hidden="true">⌘</span>思维导图</h2>
          <button class="ghost-action" type="button" data-open-mind>放大</button>
        </div>
        <div class="mindmap" aria-label="课程思维导图">
          <span class="mind-core">新时代幼儿园教师职业行为十项准则</span>
          <ul>
            <li>一坚定政治方向</li>
            <li>二自觉爱国守法</li>
            <li>三传播优秀文化</li>
            <li>四潜心培幼育人</li>
            <li>五加强安全防范</li>
            <li>六关心爱护幼儿</li>
            <li>七遵循幼教规律</li>
            <li>八秉持公平诚信</li>
            <li>九坚守廉洁自律</li>
            <li>十规范保教行为</li>
          </ul>
        </div>
      </section>

      <section class="summary-card">
        <h2><span class="icon" aria-hidden="true">✦</span>课程纪要</h2>
        <p class="summary-text">课程围绕《新时代幼儿园教师职业行为十项准则》，从多个关系维度解释幼儿教师职业道德要求。重点强调幼儿维度、家长维度与同事维度中的真实场景判断，帮助教师把准则落到日常保教行为。建议通过案例复盘、沟通记录和教研共创，把抽象规范转化为可观察的行为清单。</p>
      </section>

      <section class="summary-card">
        <h2><span class="icon" aria-hidden="true">☰</span>章节纪要</h2>
        <ol class="chapter-timeline">
          ${chapters
            .map(
              (chapter) => `
                <li>
                  <time>${chapter.time}</time>
                  <button type="button" data-seek="${chapter.seconds}">
                    <strong>${chapter.title}</strong>
                    ${chapter.text}
                  </button>
                </li>
              `
            )
            .join("")}
        </ol>
      </section>
    </div>
  `;
}

function renderSidePanel() {
  if (activePanel === "catalog") renderCatalog();
  if (activePanel === "transcript") renderTranscript();
  if (activePanel === "summary") renderSummary();
}

function addMessage(role, text) {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;
  const message = document.createElement("div");
  message.className = `message ${role}`;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n- /g, "\n• ");
  message.innerHTML = escaped.replace(/\n/g, "<br>");
  if (role === "ai") {
    const avatar = document.createElement("img");
    avatar.className = "message-avatar";
    avatar.src = "./素材/默认头像.png";
    avatar.alt = "";
    row.append(avatar, message);
  } else {
    row.append(message);
  }
  chatList.append(row);
  chatList.scrollTop = chatList.scrollHeight;
}

function addAssistantIntro() {
  const intro = document.createElement("section");
  intro.className = "assistant-intro";
  intro.innerHTML = `
    <p>你好，我已读取本课程的目录、文字记录和AI总结纪要。可以点击下方问题快速开始，也可以直接输入你的问题</p>
  `;
  chatList.append(intro);
}

function renderPrompts() {
  const quickPrompts = document.createElement("div");
  quickPrompts.className = "quick-prompts";
  quickPrompts.dataset.quickPrompts = "";
  quickPrompts.innerHTML = aiPrompts
    .map((prompt) => `<button type="button" data-prompt="${prompt}">${prompt}</button>`)
    .join("");
  chatList.append(quickPrompts);
}

function resetAssistant() {
  chatList.innerHTML = "";
  addAssistantIntro();
  renderPrompts();
}

function getAiAnswer(question) {
  if (/资源|资料|原文|案例/.test(question)) {
    return "可以参考这几类资源：\n- 《新时代幼儿园教师职业行为十项准则》原文\n- 师德师风案例研讨材料\n- 幼儿园家园沟通记录表\n- 园本教研案例复盘模板";
  }
  if (/反思|心得|总结/.test(question)) {
    return "课后反思可以这样写：本节课帮助我把《十项准则》从制度文本转化为日常保教中的行为判断。后续我会重点关注幼儿安全、家园沟通和同事协作三个场景，用案例复盘的方式检查自己的表达、处理方式和职业边界。";
  }
  return "这节课的三个重点是：一是理解《十项准则》的行为边界；二是把幼儿、家长、同事等关系放进真实情境中判断；三是把抽象规范转成可观察、可复盘的日常保教行为。";
}

function submitQuestion(question) {
  const clean = question.trim();
  if (!clean) return;
  addMessage("user", clean);
  window.setTimeout(() => addMessage("ai", getAiAnswer(clean)), 280);
}

document.querySelectorAll("[data-toggle-play]").forEach((button) => {
  button.addEventListener("click", () => {
    isPlaying = !isPlaying;
    updatePlayState();
  });
});

progressTrack.addEventListener("click", seekFromEvent);
progressTrack.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setTime(currentSeconds + 10, true);
  if (event.key === "ArrowLeft") setTime(currentSeconds - 10, true);
});

document.querySelector("[data-volume]").addEventListener("click", () => {
  isMuted = !isMuted;
  volumeIcon.textContent = isMuted ? "静" : "音";
});

document.querySelector("[data-fullscreen]").addEventListener("click", () => {
  videoStage.classList.toggle("fullscreen-mode");
});

panelTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activePanel = button.dataset.panelTab;
    panelTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    renderSidePanel();
  });
});

sideContent.addEventListener("click", (event) => {
  const seekButton = event.target.closest("[data-seek]");
  if (seekButton) {
    setTime(Number(seekButton.dataset.seek), true);
    isPlaying = true;
    updatePlayState();
  }

  if (event.target.closest("[data-open-mind]")) {
    mindModal.classList.add("open");
    mindModal.setAttribute("aria-hidden", "false");
  }
});

infoTabs.forEach((button) => {
  button.addEventListener("click", () => {
    infoTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    infoBody.innerHTML = infoContent[button.dataset.infoTab];
  });
});

document.querySelector("[data-open-ai]").addEventListener("click", () => {
  aiOverlay.classList.add("open");
  aiOverlay.setAttribute("aria-hidden", "false");
  resetAssistant();
  chatForm.elements.question.focus();
});

document.querySelector("[data-close-ai]").addEventListener("click", () => {
  aiOverlay.classList.remove("open");
  aiOverlay.setAttribute("aria-hidden", "true");
});

document.querySelector("[data-new-chat]").addEventListener("click", resetAssistant);

document.querySelector("[data-expand-ai]").addEventListener("click", () => {
  document.querySelector(".ai-drawer").classList.toggle("expanded");
});

aiOverlay.addEventListener("click", (event) => {
  if (event.target === aiOverlay) {
    aiOverlay.classList.remove("open");
    aiOverlay.setAttribute("aria-hidden", "true");
  }
});

chatList.addEventListener("click", (event) => {
  const promptButton = event.target.closest("[data-prompt]");
  if (promptButton) submitQuestion(promptButton.dataset.prompt);
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(chatForm.elements.question.value);
  chatForm.reset();
});

chatForm.elements.question.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    chatForm.requestSubmit();
  }
});

document.querySelector("[data-close-mind]").addEventListener("click", () => {
  mindModal.classList.remove("open");
  mindModal.setAttribute("aria-hidden", "true");
});

mindModal.addEventListener("click", (event) => {
  if (event.target === mindModal) {
    mindModal.classList.remove("open");
    mindModal.setAttribute("aria-hidden", "true");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    aiOverlay.classList.remove("open");
    aiOverlay.setAttribute("aria-hidden", "true");
    mindModal.classList.remove("open");
    mindModal.setAttribute("aria-hidden", "true");
    videoStage.classList.remove("fullscreen-mode");
  }
});

setTime(currentSeconds);
updatePlayState();
renderSidePanel();
