const learningTitle = document.querySelector(".learning-card > h2");
const learningContent = document.querySelector("[data-learning-content]");
const moduleTasks = [...document.querySelectorAll(".module-task")];
const resumeCard = document.querySelector(".resume-card");
const resumeClose = document.querySelector(".resume-card .close-mini");
const courseContent = learningContent ? learningContent.innerHTML : "";
let selectedHomeworkId = 1;
let currentHomeworkAiScore = null;

const homeworkSubmissions = [
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

const panelViews = {
  checkin: `
    <section class="task-panel">
      <article class="task-card complete">
        <div><img src="./素材/签到.png" alt="" /><h3>开班签到</h3><p>2026/07/11 08:30 - 2026/07/12 18:00</p></div>
        <strong>已签到</strong>
      </article>
      <article class="task-card complete">
        <div><img src="./素材/签到.png" alt="" /><h3>结业签到</h3><p>2026/07/12 16:00 - 2026/07/12 18:00</p></div>
        <strong>已签到</strong>
      </article>
    </section>
  `,
  assignment: `
    ${renderHomeworkList()}
  `,
  activity: `
    <section class="task-panel">
      <article class="task-card">
        <div><img src="./素材/活动.png" alt="" /><h3>主题研讨：AI赋能课堂教学</h3><p>围绕课程案例发表观点，并回复至少 2 位同伴。</p></div>
        <button type="button">进入活动</button>
      </article>
    </section>
  `,
  meeting: `
    <section class="task-panel">
      <article class="task-card">
        <div><img src="./素材/会议.png" alt="" /><h3>线上专家答疑会</h3><p>2026/07/18 19:30 - 21:00，会议开始前 10 分钟开放进入。</p></div>
        <button type="button">预约会议</button>
      </article>
    </section>
  `,
  exam: `
    <section class="task-panel">
      <article class="task-card">
        <div><img src="./素材/作业.png" alt="" /><h3>阶段测评</h3><p>共 20 题，满分 100 分，完成后计入网络学习成绩。</p></div>
        <button type="button">开始考试</button>
      </article>
    </section>
  `,
  review: `
    <section class="task-panel">
      <article class="task-card">
        <div><img src="./素材/活动.png" alt="" /><h3>入校指导评价</h3><p>请完成本阶段满意度评价，评价提交后不可修改。</p></div>
        <button type="button">去评价</button>
      </article>
    </section>
  `
};

function updateLearningPanel(task) {
  if (!learningTitle || !learningContent) return;
  const view = task.dataset.view || "course";
  learningTitle.textContent = task.dataset.title || "看课（3/18）";
  if (view === "course") {
    learningContent.innerHTML = courseContent;
  } else if (view === "assignment") {
    learningContent.innerHTML = renderHomeworkList();
  } else {
    learningContent.innerHTML = panelViews[view] || courseContent;
  }

  moduleTasks.forEach((item) => item.classList.remove("selected"));
  task.classList.add("selected");
  document.querySelectorAll(".stage-card").forEach((card) => card.classList.remove("active"));
  task.closest(".stage-card")?.classList.add("active");
}

function statusBadge(homework) {
  return homework.status === "graded"
    ? '<span class="homework-badge success">已点评</span>'
    : '<span class="homework-badge warning">待点评</span>';
}

function typeBadge(homework) {
  return `<span class="homework-badge neutral">${homework.type}</span>`;
}

function ensureHomeworkAi(homework) {
  if (homework.dims) return;
  homework.dims = {
    depth: 72 + Math.floor(Math.random() * 16),
    logic: 70 + Math.floor(Math.random() * 18),
    language: 76 + Math.floor(Math.random() * 15),
    reflect: 68 + Math.floor(Math.random() * 18)
  };
  homework.aiScore = Math.round((homework.dims.depth + homework.dims.logic + homework.dims.language + homework.dims.reflect) / 4);
  homework.keypoints = [
    { ok: true, text: "表达基本流畅，有个人教学情境和反思痕迹。" },
    { ok: true, text: "能围绕真实问题展开，具备继续深化的基础。" },
    { ok: false, text: "建议补充更具体的课堂事件或幼儿行为证据。" },
    { ok: false, text: "改进措施可再拆解为可执行的下一步行动。" }
  ];
  homework.comment = "该作业整体结构基本完整，思路较为清晰。建议补充更多具体课堂事例，并加强问题分析与后续行动之间的对应关系，以提升作业质量。";
}

function renderHomeworkList() {
  const gradedCount = homeworkSubmissions.filter((item) => item.status === "graded").length;
  return `
    <section class="homework-list-view" aria-label="作业列表">
      <header class="homework-list-header">
        <div>
          <h3>坊主批改作业</h3>
          <p>共 ${homeworkSubmissions.length} 份作业，${gradedCount} 份已点评，${homeworkSubmissions.length - gradedCount} 份待处理</p>
        </div>
        <button class="homework-button primary" type="button" data-homework-review-all>AI批改作业</button>
      </header>
      <div class="homework-filter-row">
        <button class="active" type="button">全部作业</button>
        <button type="button">待点评</button>
        <button type="button">已点评</button>
        <input type="search" placeholder="搜索学员姓名或作业标题" aria-label="搜索作业" />
      </div>
      <div class="homework-list">
        ${homeworkSubmissions.map((homework) => `
          <article class="homework-row">
            <div class="homework-row-main">
              <h4>${homework.title}</h4>
              <p>${homework.student} · ${homework.time} · ${typeBadge(homework)}</p>
              <div class="homework-row-tags">${statusBadge(homework)}${homework.aiScore ? `<span class="homework-badge ai">AI建议 ${homework.aiScore} 分</span>` : '<span class="homework-badge subtle">未生成AI建议</span>'}</div>
            </div>
            <div class="homework-score">${homework.score ?? homework.aiScore ?? "—"}</div>
            <button class="homework-button" type="button" data-homework-open="${homework.id}">AI批改作业</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function progressBar(label, value, tone = "blue") {
  return `
    <div class="homework-dim">
      <div><span>${label}</span><strong>${value}</strong></div>
      <i><b class="${tone}" style="width:${value}%"></b></i>
    </div>
  `;
}

function renderHomeworkDetail(id) {
  const homework = homeworkSubmissions.find((item) => item.id === Number(id));
  if (!homework || !learningTitle || !learningContent) return;
  selectedHomeworkId = homework.id;
  currentHomeworkAiScore = homework.aiScore;
  learningTitle.textContent = "作业批改";
  const hasAi = Boolean(homework.dims);
  learningContent.innerHTML = `
    <section class="homework-review-view" aria-label="坊主批改作业">
      <header class="homework-review-header">
        <button class="homework-back" type="button" data-homework-action="back-list">‹ 返回作业列表</button>
        <div>
          <h3>${homework.title}</h3>
          <p>${homework.student} · ${homework.time} · ${homework.type}</p>
        </div>
        <div class="homework-review-actions">
          <button class="homework-button" type="button" data-homework-action="check">AI查重</button>
          <button class="homework-button primary" type="button" data-homework-action="ai-grade">AI批改</button>
        </div>
      </header>
      <div class="homework-review-body">
        <article class="homework-essay">
          <span class="homework-section-label">作业内容</span>
          <div class="homework-essay-content">${homework.content.replace(/\n/g, "<br>")}</div>
          <div class="homework-check-result" data-check-result hidden>
            <strong>AI查重报告</strong>
            <p>综合相似度 <b data-check-percent>0%</b></p>
            <div class="homework-check-bar"><span data-check-bar></span></div>
            <ul>
              <li>第 2 段与往期作业存在少量表达相似，建议人工复核。</li>
              <li>未发现大段复制内容，整体风险较低。</li>
            </ul>
          </div>
        </article>
        <aside class="homework-score-panel">
          <section class="homework-score-card">
            <div class="homework-score-ring" style="--pct:${homework.score ?? homework.aiScore ?? 0}">
              <span>${homework.score ?? homework.aiScore ?? "—"}</span>
            </div>
            <div>
              <p>最终评分</p>
              <label><input type="number" min="0" max="100" value="${homework.score ?? ""}" placeholder="—" data-final-score /> 分</label>
              ${homework.aiScore ? '<button type="button" data-homework-action="adopt-score">采纳AI建议分数</button>' : ""}
            </div>
          </section>
          <section class="homework-ai-panel ${hasAi ? "" : "empty"}" data-ai-panel>
            ${hasAi ? renderAiResult(homework) : '<p>点击「AI批改」后，将生成评分建议、多维度分析和批改要点。</p>'}
          </section>
          <section class="homework-comment">
            <div>
              <strong>批改评语</strong>
              <button type="button" data-homework-action="gen-comment">AI生成</button>
            </div>
            <textarea data-homework-comment rows="5" placeholder="请输入点评内容，或点击 AI 生成评语">${homework.comment || ""}</textarea>
          </section>
          <div class="homework-submit-row">
            <button class="homework-button primary" type="button" data-homework-action="submit-grade">提交点评</button>
            <button class="homework-button success" type="button" data-homework-action="nominate">推优</button>
            <button class="homework-button danger" type="button" data-homework-action="return">退回</button>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderAiResult(homework) {
  const dims = homework.dims;
  return `
    <div class="homework-ai-title">AI评分建议 ${homework.aiScore ?? "—"} 分</div>
    ${progressBar("内容深度", dims.depth)}
    ${progressBar("逻辑结构", dims.logic)}
    ${progressBar("语言表达", dims.language, "green")}
    ${progressBar("实践反思", dims.reflect, dims.reflect >= 80 ? "blue" : "amber")}
    <div class="homework-keypoints">
      <strong>AI批改要点</strong>
      ${homework.keypoints.map((point) => `<p><span>${point.ok ? "✓" : "!"}</span>${point.text}</p>`).join("")}
    </div>
  `;
}

function showStudyToast(message) {
  let toast = document.querySelector(".study-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "study-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showStudyToast.timer);
  showStudyToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function refreshHomeworkDetail() {
  renderHomeworkDetail(selectedHomeworkId);
}

function handleHomeworkAction(action) {
  const homework = homeworkSubmissions.find((item) => item.id === selectedHomeworkId);
  if (action === "back-list") {
    learningTitle.textContent = "作业（0/1）";
    learningContent.innerHTML = renderHomeworkList();
    return;
  }
  if (action === "batch-ai") {
    homeworkSubmissions.filter((item) => !item.dims).forEach(ensureHomeworkAi);
    learningContent.innerHTML = renderHomeworkList();
    showStudyToast("AI批量批改完成，请逐一审核后提交");
    return;
  }
  if (!homework) return;
  if (action === "ai-grade") {
    ensureHomeworkAi(homework);
    refreshHomeworkDetail();
    showStudyToast("AI批改完成，请审阅后提交");
  }
  if (action === "check") {
    const result = document.querySelector("[data-check-result]");
    const bar = document.querySelector("[data-check-bar]");
    const percent = document.querySelector("[data-check-percent]");
    if (!result || !bar || !percent) return;
    const value = 18 + Math.floor(Math.random() * 16);
    result.hidden = false;
    bar.style.width = `${value}%`;
    percent.textContent = `${value}%`;
    showStudyToast(`AI查重完成，相似度 ${value}%`);
  }
  if (action === "adopt-score") {
    const input = document.querySelector("[data-final-score]");
    if (input && homework.aiScore) input.value = homework.aiScore;
    showStudyToast(`已采纳AI建议分数：${homework.aiScore}分`);
  }
  if (action === "gen-comment") {
    ensureHomeworkAi(homework);
    const textarea = document.querySelector("[data-homework-comment]");
    if (textarea) textarea.value = homework.comment;
    showStudyToast("AI评语已生成");
  }
  if (action === "submit-grade") {
    const input = document.querySelector("[data-final-score]");
    const textarea = document.querySelector("[data-homework-comment]");
    const score = Number(input?.value);
    if (!Number.isFinite(score) || input?.value === "") {
      showStudyToast("请先填写评分");
      return;
    }
    homework.score = score;
    homework.status = "graded";
    homework.comment = textarea?.value || "";
    refreshHomeworkDetail();
    showStudyToast("点评已提交");
  }
  if (action === "nominate") showStudyToast("已提交推优申请");
  if (action === "return") showStudyToast("已退回该作业");
}

moduleTasks.forEach((task) => {
  task.addEventListener("click", () => updateLearningPanel(task));
});

learningContent?.addEventListener("click", (event) => {
  const homeworkOpen = event.target.closest("[data-homework-open]");
  if (homeworkOpen) {
    window.location.href = `./homework-review.html?id=${homeworkOpen.dataset.homeworkOpen}`;
    return;
  }

  const homeworkReviewAll = event.target.closest("[data-homework-review-all]");
  if (homeworkReviewAll) {
    window.location.href = "./homework-review.html";
    return;
  }

  const homeworkAction = event.target.closest("[data-homework-action]");
  if (homeworkAction) {
    handleHomeworkAction(homeworkAction.dataset.homeworkAction);
    return;
  }

  const courseButton = event.target.closest(".primary-small, .ghost-btn");
  if (!courseButton) return;
  window.location.href = "./course-watch.html";
});

resumeCard?.addEventListener("click", (event) => {
  const resumeButton = event.target.closest("button:not(.close-mini)");
  if (!resumeButton) return;
  window.location.href = "./course-watch.html";
});

resumeClose?.addEventListener("click", () => {
  resumeCard?.classList.add("is-hidden");
});
