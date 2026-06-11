const metrics = [
  ["项目总数", "54", "个"],
  ["累计参训人次", "81,673", "人次"],
  ["平均参训率", "99", "%"],
  ["平均合格率", "98", "%"],
  ["累计研修成果数", "7,067", "份"],
  ["优秀成果数", "1,643", "份"]
];

const projectTemplates = [
  {
    name: "校级后备干部培养混合研修项目",
    range: "05/10 - 09/26",
    tags: ["椰城强师", "校级后备干部"],
    stats: ["746人", "99.45%", "96.34%", "168份", "42份"]
  },
  {
    name: "市级骨干校长培养项目",
    range: "05/10 - 09/14",
    tags: ["骨干校长", "混合研修"],
    stats: ["320人", "98.10%", "95.80%", "96份", "28份"]
  },
  {
    name: "优秀教研员培养项目",
    range: "04/10 - 09/28",
    tags: ["优秀教研员", "教学团队"],
    stats: ["510人", "97.86%", "96.12%", "132份", "36份"]
  },
  {
    name: "校园名师培养项目",
    range: "05/10 - 09/26",
    tags: ["校园名师", "专题研修"],
    stats: ["428人", "98.42%", "97.05%", "118份", "31份"]
  },
  {
    name: "校级后备干部培养混合研修项目",
    range: "05/10 - 09/26",
    tags: ["校级后备干部", "成果展示"],
    stats: ["746人", "99.45%", "96.34%", "168份", "42份"]
  }
];

function buildProjects(year) {
  return projectTemplates.map((project) => {
    const [start, end] = project.range.split(" - ");
    return {
      ...project,
      title: `${year}年海口市“椰城强师”${project.name}`,
      time: `${year}/${start} - ${year}/${end}`
    };
  });
}

const results = [
  {
    type: "教学设计",
    title: "初中数学AI辅助个性化教学设计——以一元二次方程为例",
    author: "王雅琴 · 上海市徐汇区第三中学",
    date: "2026-05",
    img: "./素材/成果图1.png"
  },
  {
    type: "课件资源",
    title: "AI赋能语文写作教学：ChatGPT辅助作文批改实践课件",
    author: "李建明 · 北京市朝阳区实验学校",
    date: "2026-04",
    img: "./素材/成果图2.png"
  },
  {
    type: "微课视频",
    title: "幼儿游戏观察AI记录工具使用实录（义乌示范课）",
    author: "陈晓燕 · 义乌市实验幼儿园",
    date: "2026-04",
    img: "./素材/成果图3.png"
  },
  {
    type: "教研报告",
    title: "AI工具融入高中生物课堂的教学效果量化研究报告",
    author: "张伟华 · 广州市越秀区育才学校",
    date: "2026-03",
    img: "./素材/成果图4.png"
  }
];

let activeProject = 0;
let activeYear = "2026";

function renderMetrics() {
  document.querySelector("#metricGrid").innerHTML = metrics.map(([label, value, unit]) => `
    <article class="metric-card">
      <i class="metric-icon"><img src="./素材/培训概览数据icon.png" alt="" /></i>
      <div>
        <h3>${label}</h3>
        <strong>${value}<small>${unit}</small></strong>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  const projects = buildProjects(activeYear);
  document.querySelector("#timelineList").innerHTML = projects.map((project, index) => `
    <button class="timeline-item ${index === activeProject ? "active" : ""}" type="button" data-index="${index}">
      <div>
        <h3>${project.title}</h3>
        <span>${project.time}</span>
      </div>
    </button>
  `).join("");

  document.querySelectorAll(".timeline-item").forEach((button) => {
    button.addEventListener("click", () => {
      activeProject = Number(button.dataset.index);
      renderTimeline();
      renderProject();
    });
  });
}

function renderProject() {
  const projects = buildProjects(activeYear);
  const project = projects[activeProject];
  document.querySelector("#projectMain").innerHTML = `
    <h2>${project.title}</h2>
    <div class="project-tags">
      ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="project-stats">
      ${[
        ["参训人数", project.stats[0]],
        ["参训率", project.stats[1]],
        ["合格率", project.stats[2]],
        ["研修成果数", project.stats[3]],
        ["优秀成果数", project.stats[4]]
      ].map(([label, value]) => `
        <div class="project-stat">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderResults() {
  document.querySelector("#resultGrid").innerHTML = results.map((item) => `
    <article class="result-card">
      <div class="result-thumb">
        <img src="${item.img}" alt="" />
      </div>
      <div class="result-body">
        <h4>${item.title}</h4>
        <p>${item.author}</p>
      </div>
      <div class="result-foot">${item.date}</div>
    </article>
  `).join("");
}

function bindActiveButtons(selector) {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.querySelectorAll(".active").forEach((activeButton) => {
        activeButton.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
}

function bindYearTabs() {
  document.querySelectorAll(".year-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".year-tabs button.active").forEach((activeButton) => {
        activeButton.classList.remove("active");
      });
      button.classList.add("active");
      activeYear = button.dataset.year;
      activeProject = 0;
      renderTimeline();
      renderProject();
    });
  });
}

function bindNavigationState() {
  document.querySelectorAll(".top-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".top-nav a.active").forEach((activeLink) => {
        activeLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

renderMetrics();
renderTimeline();
renderProject();
renderResults();
bindActiveButtons(".result-tabs button");
bindYearTabs();
bindNavigationState();
