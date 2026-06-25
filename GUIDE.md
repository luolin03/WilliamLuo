# William Luo 个人网站 — 使用文档

## 快速开始

```bash
cd "c:/Users/86183/Desktop/personal-website"
npm run dev        # 启动本地开发（改完保存自动刷新）
npm run build      # 构建生产版本
```

## 部署

改完内容后，终端执行这三行，一分钟左右网站自动更新：

```bash
git add -A
git commit -m "update: 描述你改了什么"
git push
```

网站地址：`https://luolin03.github.io/WilliamLuo`

---

## 内容修改指南

所有要改的内容都在 `src/components/` 目录下。每个板块对应的文件和修改方式如下。

### 1. Hero — 头像、名字、标签

**文件**：`src/components/Hero.jsx`

```jsx
<img src="/avatar.jpg" alt="William Luo" className="hero-avatar" />  // 头像
<h1 className="hero-name">William Luo</h1>                              // 英文名
<p className="hero-name-cn">罗林</p>                                     // 中文名
<p className="hero-tagline">I build things at the intersection...</p>   // 一句话定位
<p className="hero-bio">A researcher and engineer...</p>                 // 简介
```

**改头像**：把新照片放到 `public/avatar.jpg` 替换旧文件（建议 1:1 正方形，200px 以上）。

---

### 2. About — 个人介绍

**文件**：`src/components/About.jsx`

```jsx
<p>
  I'm William (Lin Luo), currently based in China. My work sits at the
  intersection of artificial intelligence, software engineering...
</p>
```

直接改 `<p>` 标签里的文字，段落按需增减。

---

### 3. Now — 当前状态（绿点脉冲动画）

**文件**：`src/components/Now.jsx`

```jsx
<p className="now-text">
  Building AI-powered health applications at the intersection of
  computer vision and LLMs. Exploring agent architectures...
</p>
```

一段话讲清楚你当前在忙什么。建议每月更新一次。

---

### 4. News — 动态 / 时间线

**文件**：`src/components/News.jsx`

```jsx
const NEWS_ITEMS = [
  {
    date: '2025.06',
    text: 'Launched personal website built with React + Vite.',
  },
  {
    date: '2025.05',
    text: 'Completed AVENA MVP — AI-powered nutrition tracking app...',
  },
]
```

在数组里增删对象即可，最新的放最上面。

---

### 5. Research — 研究方向

**文件**：`src/components/Research.jsx`

```jsx
const INTERESTS = [
  {
    title: 'AI Agents',
    description: 'Building autonomous agents that reason, plan...',
  },
]
```

自动按 2 列排列，加对象就行。

---

### 6. Papers — 论文

**文件**：`src/components/Papers.jsx`

```jsx
const PAPERS = [
  {
    title: '论文标题',
    venue: 'Preprint, 2025',        // 发表会议/期刊
    links: [
      { label: 'PDF', href: '#', icon: FiFileText },
      { label: 'arXiv', href: '#', icon: FiExternalLink },
    ],
  },
]
```

如果没有论文，会显示 "Papers coming soon"。

---

### 7. Projects — 项目

**文件**：`src/components/Projects.jsx`

```jsx
const PROJECTS = [
  {
    title: '项目名称',
    description: '一两句话描述你做了什么',
    link: 'https://项目网址.com',       // 没有填 null
    github: 'https://github.com/...',  // 没有填 null
  },
]
```

`link` 或 `github` 填 `null` 就不会显示那个按钮。

---

### 8. Blog — 写文章

文章文件放在 `public/posts/` 目录下，纯 Markdown 格式。

**写新文章分两步**：

第一步 — 在 `public/posts/` 下创建 `.md` 文件，比如 `my-post.md`：

```markdown
# 文章标题

*2025.06.26*

正文写在这里...

## 小标题

继续写，支持代码块、列表、引用、图片等所有 Markdown 语法。

```

第二步 — 在 `src/components/Blog.jsx` 的 `POSTS` 数组里注册：

```jsx
const POSTS = [
  {
    slug: 'hello-world',          // 文件名（不含 .md）
    title: 'Hello, world',         // 显示标题
    date: '2025.06.24',            // 显示日期
    description: '一句话描述...',   // 列表里的简介
  },
  {
    slug: 'my-post',               // ← 新增
    title: '我的文章',
    date: '2025.06.26',
    description: '关于XX的思考',
  },
]
```

---

### 9. Reading — 在读书籍

**文件**：`src/components/Reading.jsx`

```jsx
const BOOKS = [
  {
    title: '书名',
    author: '作者',
    status: 'Reading',    // 可选: Reading / Re-reading / Up next
  },
]
```

状态标签会自动变色：Reading 绿，Re-reading 蓝，Up next 灰。

---

### 10. Contact — 社交链接

**文件**：`src/components/Contact.jsx`

```jsx
const SOCIALS = [
  { href: 'mailto:你的邮箱@example.com', icon: FiMail, label: 'Email' },
  { href: '你的GitHub链接',              icon: FiGithub, label: 'GitHub' },
  { href: '你的Twitter链接',            icon: FiTwitter, label: 'Twitter' },
  { href: '你的LinkedIn链接',            icon: FiLinkedin, label: 'LinkedIn' },
]
```

---

## 设计调整

### 改配色 / 暗色模式

**文件**：`src/index.css`

```css
:root {                        /* 浅色模式 */
  --color-bg: #fafaf8;         /* 背景 */
  --color-text: #171717;       /* 正文 */
  --color-accent: #b37400;     /* 链接色 */
  --max-width: 760px;          /* 内容宽度 */
}

[data-theme='dark'] {          /* 深色模式 */
  --color-bg: #0d0d0d;
  --color-text: #e4e4e4;
  --color-accent: #e6a817;
}
```

改对应变量值即可全局生效。

### 换字体

**文件**：`index.html`，替换 Google Fonts 的 `<link>`。

### 调内容宽度

**文件**：`src/index.css`，改 `--max-width` 的值。

---

## Google Analytics

已接入（ID: `G-R4E0MEYSDZ`）。查看数据：打开 [analytics.google.com](https://analytics.google.com) → Reports → Realtime。

如需换账号，改 `index.html` 里的 `gtag('config', 'G-你的ID')`。

---

## 文件结构速查

```
personal-website/
├── index.html                      # HTML 入口
├── public/
│   ├── avatar.jpg                  # ← 头像
│   └── posts/                      # ← 博客文章 .md 文件
│       └── hello-world.md
├── src/
│   ├── index.css                   # 全局样式 + 配色 + 宽度
│   ├── App.jsx                     # 主布局 + 各板块顺序
│   ├── components/
│   │   ├── Hero.jsx                # ← 名字 / 标签
│   │   ├── About.jsx               # ← 个人介绍
│   │   ├── Now.jsx                 # ← 当前状态
│   │   ├── News.jsx                # ← 动态时间线
│   │   ├── Research.jsx            # ← 研究方向
│   │   ├── Papers.jsx              # ← 论文列表
│   │   ├── Projects.jsx            # ← 项目展示
│   │   ├── Blog.jsx                # ← 博客列表
│   │   ├── Reading.jsx             # ← 在读书籍
│   │   ├── Contact.jsx             # ← 社交链接
│   │   ├── Navbar.jsx              # 顶部导航
│   │   └── Footer.jsx              # 底部
│   │   └── *.css                   # 对应样式文件
│   └── hooks/
│       └── useScrollReveal.js      # 滚动动画
└── .github/workflows/deploy.yml    # 自动部署配置
```

标了 ← 的是你需要改的内容文件，其他一般不需要动。
