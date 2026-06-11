const asset = "./临汾市教育局专题页素材图片/";
const number = new Intl.NumberFormat("zh-CN");

const metrics = [
  ["培训项目", "3", "个"],
  ["累计参训人次", "80,258", "人次"],
  ["平均参训率", "99.89", "%"],
  ["平均合格率", "99.75", "%"],
  ["累计研修成果数", "123,780", "份"],
  ["优秀成果数", "10,626", "份"]
];

const pathSteps = [
  {
    title: "骨干先行培训",
    desc: "组建市县管理团队、指导团队和学科骨干队伍，先行开展方案解读、任务明确、平台操作和研修规划。",
    icon: "路径1.png",
    fallbackIcon: "路径2.png"
  },
  {
    title: "全员网络研修",
    desc: "面向全市教师开展线上课程学习、主题研讨和任务研修，完成分学段、分学科的全员覆盖。",
    icon: "路径2.png"
  },
  {
    title: "校本/园本研修与送培到校",
    desc: "依托工作坊和学校研修活动，推动课程学习转化为课堂实践，并通过专家入校、送培到校支持教学改进。",
    icon: "路径3.png"
  },
  {
    title: "成果总结与展示",
    desc: "汇聚优秀作业、课例、案例和研修经验，开展成果展示、经验交流和资源沉淀，形成区域培训成果。",
    icon: "路径4.png"
  }
];

const themeYears = [
  {
    year: "2023",
    color: "#ff9224",
    items: [
      ["幼儿园", "去小学化背景下五大领域教育活动的组织与实施"],
      ["义务教育", "整体理解课程标准 掌握学科育人策略"],
      ["高中", "“教什么”--基于核心素养建构课程内容"],
      ["中职及其他", "通识类培训"]
    ]
  },
  {
    year: "2024",
    color: "#41a3ff",
    items: [
      ["幼儿园", "幼儿游戏活动的观察、评价与支持"],
      ["义务教育", "聚焦课程关键问题，构建学科育人体系"],
      ["高中", "“怎么教”——基于核心素养实施单元教学"],
      ["中职及其他", "通识类培训"]
    ]
  },
  {
    year: "2025",
    color: "#a881fd",
    items: [
      ["幼儿园", "立足儿童经验的课程创生与实施"],
      ["义务教育", "探索教学实践活动、转变学科育人方式"],
      ["高中", "基于教考结合的教学难点突破与复习备考能力提升"],
      ["中职及其他", "通识类培训"]
    ]
  }
];

const projects = [
  {
    year: "2023",
    title: "理解新课标与核心素养",
    subtitle: "临汾市2023年度中小学、幼儿园教师全员培训",
    status: "已结束",
    statusType: "done",
    color: "#ffac45",
    icon: "2023年度icon.png",
    cover: "2023年封面图.png",
    projectUrl: "https://ipx.yanxiu.com/cms/project/index?projectId=6289627417674083894",
    tags: ["新课标理解", "核心素养", "幼小衔接", "单元教学设计", "师德教育"],
    date: "2024年4月24日–2024年9月2日",
    stats: [
      ["参训人数", "38924人", "#2f76ff"],
      ["参训率", "99.82%", "#43c92d"],
      ["合格率", "99.62%", "#b339ff"],
      ["研修成果数", "80916份", "#ff7a3d"],
      ["优秀成果数", "6054份", "#ff2fbd"]
    ],
    files: [
      {
        name: "项目实施方案.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/8601575396481867793/briefing/detail?projectId=6289627417674083894&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "考核评价.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/8601576152396111877/briefing/detail?projectId=6289627417674083894&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "研修安排.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/8601580962759606293/briefing/detail?projectId=6289627417674083894&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "学员+学校管理员操作手册.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/8646665715502088194/briefing/detail?projectId=6289627417674083894&role=100&source=cms&notJudgePay=true"
      }
    ]
  },
  {
    year: "2024",
    title: "围绕课堂关键问题开展教学改进",
    subtitle: "临汾市2024年度中小学、幼儿园教师全员培训",
    status: "已结束",
    statusType: "done",
    color: "#2984ff",
    icon: "2024年度icon.png",
    cover: "24年封面图.png",
    projectUrl: "https://ipx.yanxiu.com/cms/project/index?projectId=6289627417674087226",
    tags: ["核心素养", "课堂改进", "单元教学设计", "幼儿观察评价"],
    date: "2025年11月4日–2025年12月31日",
    stats: [
      ["参训人数", "41334人", "#2f76ff"],
      ["参训率", "99.95%", "#43c92d"],
      ["合格率", "99.88%", "#b339ff"],
      ["研修成果数", "42864份", "#ff7a3d"],
      ["优秀成果数", "4572份", "#ff2fbd"]
    ],
    files: [
      {
        name: "项目实施方案.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/641324456510087199/briefing/detail?projectId=6289627417674087226&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "考核评价.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/641121688956608551/briefing/detail?projectId=6289627417674087226&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "研修安排.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/641325092165296146/briefing/detail?projectId=6289627417674087226&role=100&source=cms&notJudgePay=true"
      },
      {
        name: "学员+学校管理员操作手册.pdf",
        url: "https://ipx.yanxiu.com/grain/guide/641126675413639168/briefing/detail?projectId=6289627417674087226&role=100&source=cms&notJudgePay=true"
      }
    ]
  },
  {
    year: "2025",
    title: "面向真实实践形成成果资源",
    subtitle: "临汾市2025年度中小学、幼儿园教师全员培训",
    status: "未开始",
    statusType: "pending",
    color: "#9c4dff",
    icon: "2025年度icon.png",
    cover: "2025年封面图.png",
    tags: ["课程创生", "实践活动", "教考结合", "资源建设"],
    date: "项目筹备中",
    stats: [
      ["参训人数", "待启动", "#2f76ff"],
      ["参训率", "--", "#43c92d"],
      ["合格率", "--", "#b339ff"],
      ["研修成果数", "--", "#ff7a3d"],
      ["优秀成果数", "--", "#ff2fbd"]
    ],
    files: ["项目实施方案.pdf", "研修安排.pdf"]
  }
];

const typeFilters = ["全部类型", "教学设计", "教学课例", "幼儿园保教实践类", "幼儿园活动设计类", "师德育人", "教辅管理"];
const stageFilters = ["全学段", "幼儿园", "中小学", "高中", "中职及其他"];

const achievements = [
  {
    year: "2023",
    title: "魔力画室——山西经济出版社小学信息技术第一册第三单元",
    author: "英鸽 · 霍州市第四中学",
    date: "2024-05",
    type: "教学设计",
    stage: "中小学",
    image: "23-成果1图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599165885469188135&uId=5336545209432203287&projectId=6289627417674083894&flag=0&source=ums",
    desc: "围绕小学信息技术课堂任务设计，展示单元化学习目标、操作实践和评价要点。"
  },
  {
    year: "2023",
    title: "苏教版四年级数学下第三单元《三位数乘两位数》单元教学设计",
    author: "王明亮 · 临汾市逸夫育英小学",
    date: "2024-08",
    type: "教学设计",
    stage: "中小学",
    image: "23-成果2图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599165885469188135&uId=4199193717187469317&projectId=6289627417674083894&flag=0&source=ums",
    desc: "以目标导向、探究学习和合作交流为线索，形成数学单元整体设计方案。"
  },
  {
    year: "2023",
    title: "追光而遇，沐光而行",
    author: "梁娟娟 · 霍州市第四中学",
    date: "2024-05",
    type: "师德育人",
    stage: "高中",
    image: "23-成果3图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599171795344195659&uId=5357981219407847447&projectId=6289627417674083894&flag=0&source=ums",
    desc: "以师德成长故事为载体，呈现教师专业信念和育人实践反思。"
  },
  {
    year: "2023",
    title: "关于教学教辅工作改进的思考与建议",
    author: "张艳 · 山西省翼城县职业技术学校",
    date: "2024-06",
    type: "教辅管理",
    stage: "中职及其他",
    image: "23-成果4图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599169218363818044&uId=6242225100578709506&projectId=6289627417674083894&flag=0&source=ums",
    desc: "面向中职学校教辅工作场景，提出数字化管理和服务支持改进建议。"
  },
  {
    year: "2023",
    title: "高中物理单元教学设计 第八单元“电场”",
    author: "郭花平 · 汾西县第一中学校",
    date: "2024-09",
    type: "教学课例",
    stage: "高中",
    image: "23-成果5图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8601558079173845001&uId=5339590787921666055&projectId=6289627417674083894&flag=0&source=ums",
    desc: "聚焦物理核心概念与实验探究，组织单元目标、活动任务和学习评价。"
  },
  {
    year: "2023",
    title: "美术单元备课",
    author: "苗婷婷 · 霍州市曹村矿区学校",
    date: "2024-09",
    type: "教学设计",
    stage: "中小学",
    image: "23-成果6图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599165885469188135&uId=5353643886554456066&projectId=6289627417674083894&flag=0&source=ums",
    desc: "结合美术学习过程，呈现材料观察、创意表现和作品评价的整体备课思路。"
  },
  {
    year: "2023",
    title: "学校心理健康教育工作改进计划",
    author: "秦宇珠 · 临汾市教育局",
    date: "2024-09",
    type: "教学设计",
    stage: "中小学",
    image: "23-成果7图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599169218363818044&uId=8908234240350289934&projectId=6289627417674083894&flag=0&source=ums",
    desc: "从心理健康课程、家校协同和危机识别等方面规划学校支持体系。"
  },
  {
    year: "2023",
    title: "《生气了该怎么办？》活动设计",
    author: "李爱生 · 永和县城镇第二幼儿园",
    date: "2024-05",
    type: "幼儿园活动设计类",
    stage: "幼儿园",
    image: "23-成果8图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=8599164889036660757&uId=5361002093245423617&projectId=6289627417674083894&flag=0&source=ums",
    desc: "面向幼儿情绪认知与表达，设计故事导入、游戏体验和表达分享活动。"
  },
  {
    year: "2024",
    title: "《少让父母为我操心》教学设计",
    author: "张丽珍 · 第一小学",
    date: "2025-11",
    type: "教学设计",
    stage: "中小学",
    image: "24-成果1图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640233530521985038&uId=5297261273879339009&projectId=6289627417674087226&flag=0&source=ums",
    desc: "围绕学生自我管理与家庭责任意识，形成课堂教学活动设计。"
  },
  {
    year: "2024",
    title: "《函数》单元教学内容分析，《一次函数的性质》教学设计及实施后的教学反思",
    author: "张秀芳 · 汾西县第三中学校",
    date: "2025-11",
    type: "教学设计",
    stage: "中小学",
    image: "24-成果2图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640233341543440418&uId=4675028402267414529&projectId=6289627417674087226&flag=0&source=ums",
    desc: "聚焦函数单元内容分析、课时设计与实施反思，推进课堂关键问题改进。"
  },
  {
    year: "2024",
    title: "幼儿游戏观察记录",
    author: "贾爱阳 · 山焦幼儿园",
    date: "2025-11",
    type: "幼儿园保教实践类",
    stage: "幼儿园",
    image: "24-成果3图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640232815409930247&uId=5457446923906768908&projectId=6289627417674087226&flag=0&source=ums",
    desc: "围绕幼儿游戏活动中的观察、评价与支持，形成可迁移的园本实践案例。"
  },
  {
    year: "2024",
    title: "激光雕刻作品展示",
    author: "李昌太 · 襄汾县职业技术教育中心",
    date: "2025-12",
    type: "教辅管理",
    stage: "中职及其他",
    image: "24-成果4图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640233253496545298&uId=6265689262830985268&projectId=6289627417674087226&flag=0&source=ums",
    desc: "结合中职实践教学场景，展示技术支持下的作品制作与过程管理成果。"
  },
  {
    year: "2024",
    title: "高中物理“牛顿运动定律”单元教学",
    author: "郭花平 · 汾西县第一中学校",
    date: "2025-11",
    type: "教学课例",
    stage: "高中",
    image: "24-成果5图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640233004388442113&uId=5339590787921666055&projectId=6289627417674087226&flag=0&source=ums",
    desc: "围绕牛顿运动定律组织单元目标、学习活动和课堂评价。"
  },
  {
    year: "2024",
    title: "中国特色社会主义道路的开辟与发展”单元教学内容分析与单课教学设计、反思",
    author: "郝婉昭 · 汾西县第三中学校",
    date: "2025-11",
    type: "教学设计",
    stage: "中小学",
    image: "24-成果6图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640232939963981844&uId=5298208022110461956&projectId=6289627417674087226&flag=0&source=ums",
    desc: "结合历史单元内容分析、单课教学设计与反思，沉淀课堂改进成果。"
  },
  {
    year: "2024",
    title: "同伴与交往",
    author: "马亚丽 · 第一小学",
    date: "2025-11",
    type: "师德育人",
    stage: "中小学",
    image: "24-成果7图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640233341543440418&uId=5297509591708524554&projectId=6289627417674087226&flag=0&source=ums",
    desc: "围绕同伴交往主题，沉淀学生成长支持和课堂活动设计。"
  },
  {
    year: "2024",
    title: "幼儿游戏活动指导方案",
    author: "芦慧 · 洪洞县大槐树镇中心校",
    date: "2025-11",
    type: "幼儿园活动设计类",
    stage: "幼儿园",
    image: "24-成果8图片.png",
    url: "https://ipx.yanxiu.com/grain/homeworkView?workId=640232877686956033&uId=5463548491886419981&projectId=6289627417674087226&flag=0&source=ums",
    desc: "面向幼儿游戏活动指导，呈现活动目标、过程支持与评价反思。"
  }
];

const state = {
  pathIndex: -1,
  stage: "全部",
  themeKey: "2023-幼儿园",
  projectYear: "2023",
  type: "全部类型",
  resultStage: "全学段"
};

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function renderMetrics() {
  document.querySelector("#metricGrid").innerHTML = metrics.map(([label, value, unit]) => `
    <article class="metric-card">
      <div class="metric-icon"><img src="${asset}培训概览数据icon.png" alt="" /></div>
      <div>
        <span>${label}</span>
        <strong>${value}<small>${unit}</small></strong>
      </div>
    </article>
  `).join("");
}

function renderPath() {
  document.querySelector("#pathGrid").innerHTML = pathSteps.map((step, index) => `
    <button class="path-card ${index === state.pathIndex ? "active" : ""}" type="button" data-index="${index}">
      <em>Stage ${String(index + 1).padStart(2, "0")}</em>
      <img src="${asset}${step.icon}" alt="" ${step.fallbackIcon ? `onerror="this.onerror=null;this.src='${asset}${step.fallbackIcon}'"` : ""} />
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </button>
  `).join("");

  document.querySelectorAll(".path-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.pathIndex = Number(card.dataset.index);
      renderPath();
      showToast(`已选中：${pathSteps[state.pathIndex].title}`);
    });
  });
}

function renderThemes() {
  document.querySelector("#themeColumns").innerHTML = themeYears.map((year) => `
    <section class="theme-year year-${year.year}" style="--year-color:${year.color}">
      <h3>${year.year}年</h3>
      ${year.items.map(([stage, text]) => {
        const key = `${year.year}-${stage}`;
        const active = key === state.themeKey || stage === state.stage;
        return `<button class="theme-cell ${active ? "active" : ""}" type="button" data-key="${key}" data-stage="${stage}">${text}</button>`;
      }).join("")}
    </section>
  `).join("");

  document.querySelectorAll(".theme-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      state.themeKey = cell.dataset.key;
      state.stage = cell.dataset.stage;
      updateStagePills();
      renderThemes();
      showToast(`主题已切换：${cell.textContent.trim()}`);
    });
  });
}

function updateStagePills() {
  document.querySelectorAll(".stage-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === state.stage);
  });
}

function bindStagePills() {
  document.querySelectorAll(".stage-pill").forEach((button) => {
    button.addEventListener("click", () => {
      state.stage = state.stage === button.dataset.stage ? "全部" : button.dataset.stage;
      updateStagePills();
      renderThemes();
    });
  });
  updateStagePills();
}

function renderTimeline() {
  document.querySelector("#timelineTrack").innerHTML = projects.map((project) => `
    <button class="timeline-card ${project.year === state.projectYear ? "active" : ""}" type="button" data-year="${project.year}" style="--year-color:${project.color}">
      <span class="year-ribbon"><img src="${asset}${project.icon}" alt="${project.year}年度" /></span>
      <div>
        <span class="status ${project.statusType === "pending" ? "pending" : ""}">${project.status}</span>
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
      </div>
    </button>
  `).join("");

  document.querySelectorAll(".timeline-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.projectYear = card.dataset.year;
      state.type = "全部类型";
      state.resultStage = "全学段";
      renderTimeline();
      renderProjectDetail();
      renderResults();
    });
  });
}

function renderProjectDetail() {
  const project = projects.find((item) => item.year === state.projectYear) || projects[0];
  const projectAction = project.projectUrl
    ? `<a class="project-action" href="${project.projectUrl}" target="_blank" rel="noreferrer">进入项目主页 →</a>`
    : `<button class="project-action" type="button" id="projectAction">进入项目主页 →</button>`;
  document.querySelector("#projectDetail").innerHTML = `
    <a class="project-cover" href="${asset}${project.cover}" target="_blank" rel="noreferrer" aria-label="查看${project.year}年度封面图">
      <img src="${asset}${project.cover}" alt="${project.subtitle}封面" />
    </a>
    <div class="project-main">
      <div class="project-title-row">
        <h3>${project.subtitle}</h3>
        ${projectAction}
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <p class="project-date">${project.date}</p>
      <div class="project-stats">
        ${project.stats.map(([label, value, color]) => `
          <div style="--dot-color:${color}">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
    </div>
    <aside class="file-panel">
      <h4>相关文件</h4>
      ${project.files.map((file) => {
        const item = typeof file === "string" ? { name: file } : file;
        const inner = `<img src="${asset}文件icon.png" alt="" /><span>${item.name}</span>`;
        return item.url
          ? `<a href="${item.url}" target="_blank" rel="noreferrer">${inner}</a>`
          : `<button type="button" data-file="${item.name}">${inner}</button>`;
      }).join("")}
    </aside>
  `;

  const actionButton = document.querySelector("#projectAction");
  if (actionButton) {
    actionButton.addEventListener("click", () => {
      showToast(`${project.year}年度项目主页已在当前专题页中展示`);
    });
  }

  document.querySelectorAll(".file-panel button").forEach((button) => {
    button.addEventListener("click", () => showToast(`已点击：${button.dataset.file}`));
  });
}

function renderFilterTabs(target, filters, active, setter) {
  document.querySelector(target).innerHTML = filters.map((filter) => `
    <button class="filter-tab ${filter === active ? "active" : ""}" type="button" data-filter="${filter}">${filter}</button>
  `).join("");

  document.querySelectorAll(`${target} .filter-tab`).forEach((button) => {
    button.addEventListener("click", () => {
      setter(button.dataset.filter);
      renderResults();
    });
  });
}

function renderResults() {
  renderFilterTabs("#typeTabs", typeFilters, state.type, (value) => {
    state.type = value;
  });
  renderFilterTabs("#stageTabs", stageFilters, state.resultStage, (value) => {
    state.resultStage = value;
  });

  const filtered = achievements.filter((item) => {
    const yearMatch = item.year === state.projectYear;
    const typeMatch = state.type === "全部类型" || item.type === state.type;
    const stageMatch = state.resultStage === "全学段" || item.stage === state.resultStage;
    return yearMatch && typeMatch && stageMatch;
  });

  document.querySelector("#achievementGrid").innerHTML = filtered.map((item, index) => {
    const cardInner = `
      <span class="card-badge">${item.type}</span>
      <img src="${asset}${item.image}" alt="${item.title}" />
      <div class="achievement-body">
        <h3>${item.title}</h3>
        <p>${item.author}<time>${item.date}</time></p>
      </div>
    `;
    return item.url
      ? `<a class="achievement-card" href="${item.url}" target="_blank" rel="noreferrer">${cardInner}</a>`
      : `<button class="achievement-card" type="button" data-index="${achievements.indexOf(item)}">${cardInner}</button>`;
  }).join("") || `
    <div class="empty-state">
      <img src="${asset}研修成果空态.png" alt="" />
      <span>暂无研修成果</span>
    </div>
  `;

  document.querySelectorAll(".achievement-card[data-index]").forEach((card) => {
    card.addEventListener("click", () => openModal(achievements[Number(card.dataset.index)]));
  });
}

function openModal(item) {
  const modal = document.querySelector("#resultModal");
  document.querySelector("#modalImage").src = `${asset}${item.image}`;
  document.querySelector("#modalImage").alt = item.title;
  document.querySelector("#modalBadge").textContent = `${item.type} · ${item.stage}`;
  document.querySelector("#modalTitle").textContent = item.title;
  document.querySelector("#modalMeta").textContent = `${item.author} · ${item.date}`;
  document.querySelector("#modalDesc").textContent = item.desc;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.querySelector("#resultModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function bindModal() {
  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function bindNavState() {
  const links = [...document.querySelectorAll(".top-nav a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  window.addEventListener("scroll", () => {
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 90) {
        current = section;
      }
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  }, { passive: true });
}

document.querySelector("#showAllResults").addEventListener("click", () => {
  state.type = "全部类型";
  state.resultStage = "全学段";
  renderResults();
  const currentCount = achievements.filter((item) => item.year === state.projectYear).length;
  showToast(`已显示${state.projectYear}年度全部 ${number.format(currentCount)} 项示例成果`);
});

renderMetrics();
renderPath();
bindStagePills();
renderThemes();
renderTimeline();
renderProjectDetail();
renderResults();
bindModal();
bindNavState();
