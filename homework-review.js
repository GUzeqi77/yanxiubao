const submissions = [
  {
    id: 1,
    title: "研修作业：课堂改进方案",
    student: "刘安娜",
    time: "2026/07/18 15:06",
    type: "个人作业",
    status: "pending",
    score: null,
    aiScore: 88,
    content:
      "初为人师的实践心得\n\n当我第一次站在讲台上，我深深地感受到了身为教师的责任与压力。这份责任，不仅仅是对知识的传授，更是对每一个学生成长的期待和关怀。\n\n在教学过程中，我尝试了各种不同的教学方法。我逐渐发现，与其单纯地灌输知识，不如与学生进行互动，引导他们主动思考。每当我看到学生们因为某个问题而眉头紧锁，又因为突然的理解而豁然开朗时，我都深深地体会到了教学的魅力。\n\n作为一名教师，我不仅要传授知识，更要引导学生树立正确的价值观和世界观。",
    dims: { depth: 85, logic: 78, language: 92, reflect: 70 },
    keypoints: [
      { ok: true, text: "情感表达真挚，个人经历描述生动，具有较强共鸣感。" },
      { ok: true, text: "能将教学实践与个人成长结合，反思角度较为全面。" },
      { ok: false, text: "理论依据偏薄弱，建议补充相关教育理论支撑观点。" },
      { ok: false, text: "实践改进措施不够具体，可进一步细化行动计划。" }
    ],
    comment: "该作业情感表达真挚，能结合个人教学实践进行反思。建议补充具体课堂案例与教育理论，使论点更具说服力。整体评价：良好，具备继续打磨价值。"
  },
  {
    id: 2,
    title: "幼儿观察记录与支持策略",
    student: "刘娜娜",
    time: "2026/07/19 09:42",
    type: "集体作业",
    status: "graded",
    score: 94,
    aiScore: 92,
    content:
      "本次观察对象为中班幼儿小雨。区域活动中，小雨更愿意独自操作积木，在同伴邀请时会短暂回应，但很快回到自己的搭建任务。\n\n我尝试用开放性问题引导她描述自己的搭建思路，并邀请她选择一名同伴共同完善作品。活动后，小雨能够主动向同伴介绍建筑的入口、道路和停车区。\n\n后续支持上，我计划继续通过小组合作任务帮助她表达想法，并观察她在合作中的语言互动变化。",
    dims: { depth: 92, logic: 90, language: 88, reflect: 95 },
    keypoints: [
      { ok: true, text: "观察对象与情境清晰，能呈现具体行为证据。" },
      { ok: true, text: "支持策略较有针对性，体现儿童本位视角。" },
      { ok: true, text: "后续观察计划明确，具备持续改进意识。" },
      { ok: false, text: "可进一步补充家园沟通或同伴互动的记录维度。" }
    ],
    comment: "作业结构完整，观察证据较充分，支持策略与幼儿表现之间有较好对应关系。建议后续增加持续观察记录，形成更完整的发展支持链条。"
  },
  {
    id: 3,
    title: "家园沟通案例复盘",
    student: "王老师",
    time: "2026/07/20 14:18",
    type: "个人作业",
    status: "pending",
    score: null,
    aiScore: null,
    content:
      "本案例来自一次午睡问题沟通。家长反馈幼儿回家后说不喜欢午睡，我一开始解释较多，忽略了家长的焦虑。\n\n复盘后我意识到，沟通应先回应情绪，再说明园内观察事实。后续我会用具体记录与家长共商支持方式，避免简单评价幼儿表现。",
    dims: null,
    keypoints: null,
    comment: ""
  }
];

const listEl = document.querySelector("[data-list]");
const countLabel = document.querySelector("[data-count-label]");
const searchInput = document.querySelector("[data-search]");
const titleEl = document.querySelector("[data-title]");
const metaEl = document.querySelector("[data-meta]");
const contentEl = document.querySelector("[data-content]");
const finalScore = document.querySelector("[data-final-score]");
const commentEl = document.querySelector("[data-comment]");
const scoreRing = document.querySelector("[data-score-ring]");
const scoreRingValue = document.querySelector("[data-score-ring-value]");
const aiPanel = document.querySelector("[data-ai-panel]");
const adoptButton = document.querySelector("[data-adopt]");
const checkResult = document.querySelector("[data-check-result]");
const checkBar = document.querySelector("[data-check-bar]");
const checkPercent = document.querySelector("[data-check-percent]");
const toast = document.querySelector("[data-toast]");

let selectedId = Number(new URLSearchParams(window.location.search).get("id")) || submissions[0].id;

function ensureAi(submission) {
  if (submission.dims) return;
  submission.dims = {
    depth: 72 + Math.floor(Math.random() * 16),
    logic: 70 + Math.floor(Math.random() * 18),
    language: 76 + Math.floor(Math.random() * 15),
    reflect: 68 + Math.floor(Math.random() * 18)
  };
  submission.aiScore = Math.round((submission.dims.depth + submission.dims.logic + submission.dims.language + submission.dims.reflect) / 4);
  submission.keypoints = [
    { ok: true, text: "表达基本流畅，有个人教学情境和反思痕迹。" },
    { ok: true, text: "能围绕真实问题展开，具备继续深化的基础。" },
    { ok: false, text: "建议补充更具体的课堂事件或幼儿行为证据。" },
    { ok: false, text: "改进措施可再拆解为可执行的下一步行动。" }
  ];
  submission.comment = "该作业整体结构基本完整，思路较为清晰。建议补充更多具体课堂事例，并加强问题分析与后续行动之间的对应关系，以提升作业质量。";
}

function getSelected() {
  return submissions.find((item) => item.id === selectedId) || submissions[0];
}

function renderList(filter = "") {
  const keyword = filter.trim();
  const rows = keyword
    ? submissions.filter((item) => item.title.includes(keyword) || item.student.includes(keyword))
    : submissions;
  countLabel.textContent = `共 ${rows.length} 份`;
  listEl.innerHTML = rows
    .map((item) => `
      <article class="submission-item ${item.id === selectedId ? "active" : ""}" data-id="${item.id}">
        <div class="submission-title">
          <span>${item.title}</span>
          <span class="badge ${item.status === "graded" ? "graded" : "pending"}">${item.status === "graded" ? "已点评" : "待点评"}</span>
        </div>
        <div class="submission-meta">${item.student} · ${item.time} · <span class="badge type">${item.type}</span></div>
        <div class="submission-foot">
          <button class="btn" type="button" data-quick-ai="${item.id}">AI批改</button>
          <span class="mini-score">${item.score ?? item.aiScore ?? "—"}</span>
        </div>
      </article>
    `)
    .join("");
}

function dim(label, value, tone = "") {
  return `
    <div class="dim">
      <div><span>${label}</span><strong>${value}</strong></div>
      <i><b class="${tone}" style="width:${value}%"></b></i>
    </div>
  `;
}

function renderAi(item) {
  if (!item.dims) {
    aiPanel.innerHTML = "<p>点击「AI批改」后，将生成评分建议、多维度分析和批改要点。</p>";
    adoptButton.hidden = true;
    return;
  }
  aiPanel.innerHTML = `
    <div class="ai-title">AI评分建议 ${item.aiScore} 分</div>
    ${dim("内容深度", item.dims.depth)}
    ${dim("逻辑结构", item.dims.logic)}
    ${dim("语言表达", item.dims.language, "green")}
    ${dim("实践反思", item.dims.reflect, item.dims.reflect >= 80 ? "" : "amber")}
    <div class="keypoints">
      <strong>AI批改要点</strong>
      ${item.keypoints.map((point) => `<p><span>${point.ok ? "✓" : "!"}</span>${point.text}</p>`).join("")}
    </div>
  `;
  adoptButton.hidden = false;
}

function renderDetail() {
  const item = getSelected();
  titleEl.textContent = item.title;
  metaEl.textContent = `${item.student} · ${item.time} · ${item.type}`;
  contentEl.innerHTML = item.content.replace(/\n/g, "<br>");
  finalScore.value = item.score ?? "";
  finalScore.placeholder = "—";
  commentEl.value = item.comment || "";
  const visibleScore = item.score ?? item.aiScore ?? 0;
  scoreRing.style.setProperty("--pct", visibleScore);
  scoreRingValue.textContent = item.score ?? item.aiScore ?? "—";
  checkResult.hidden = true;
  renderAi(item);
  renderList(searchInput.value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

listEl.addEventListener("click", (event) => {
  const quick = event.target.closest("[data-quick-ai]");
  if (quick) {
    event.stopPropagation();
    const item = submissions.find((entry) => entry.id === Number(quick.dataset.quickAi));
    ensureAi(item);
    selectedId = item.id;
    renderDetail();
    showToast(`AI批改完成：${item.title}`);
    return;
  }
  const row = event.target.closest("[data-id]");
  if (!row) return;
  selectedId = Number(row.dataset.id);
  renderDetail();
});

searchInput.addEventListener("input", () => renderList(searchInput.value));

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  const item = getSelected();
  if (action === "batch-ai") {
    submissions.forEach(ensureAi);
    renderDetail();
    showToast("AI批量批改完成，请逐一审核后提交");
  }
  if (action === "ai-grade") {
    ensureAi(item);
    renderDetail();
    showToast("AI批改完成，请审阅后提交");
  }
  if (action === "check") {
    const value = 18 + Math.floor(Math.random() * 16);
    checkResult.hidden = false;
    checkBar.style.width = `${value}%`;
    checkPercent.textContent = `${value}%`;
    showToast(`AI查重完成，相似度 ${value}%`);
  }
  if (action === "adopt-score" && item.aiScore) {
    finalScore.value = item.aiScore;
    scoreRing.style.setProperty("--pct", item.aiScore);
    scoreRingValue.textContent = item.aiScore;
    showToast(`已采纳AI建议分数：${item.aiScore}分`);
  }
  if (action === "gen-comment") {
    ensureAi(item);
    commentEl.value = item.comment;
    renderAi(item);
    showToast("AI评语已生成");
  }
  if (action === "submit-grade") {
    const score = Number(finalScore.value);
    if (!Number.isFinite(score) || finalScore.value === "") {
      showToast("请先填写评分");
      return;
    }
    item.score = score;
    item.status = "graded";
    item.comment = commentEl.value;
    renderDetail();
    showToast("点评已提交");
  }
  if (action === "nominate") showToast("已提交推优申请");
  if (action === "return") showToast("已退回该作业");
});

renderDetail();
