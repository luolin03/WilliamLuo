# William Luo 个人网站 — 内容修改指南

每个文件路径都是相对于 `src/`，修改后保存，浏览器会自动刷新。

---

## 1. 修改个人信息

### 名字 & 标签 → [Hero.jsx](src/components/Hero.jsx)

```jsx
// 英文名（h1）
<h1 className="hero-name">William Luo</h1>

// 中文名
<p className="hero-name-cn">罗林</p>

// 一句话定位（大字）
<p className="hero-tagline">
  I build things at the intersection of AI and human experience.
</p>

// 简短介绍（小字正文）
<p className="hero-bio">
  A researcher and engineer passionate about making intelligence accessible...
</p>
```

### 关于我 → [About.jsx](src/components/About.jsx)

```jsx
// 直接改 <p> 标签里的文字，段落按需增减
<p>
  I'm William (Lin Luo), currently based in China. My work sits at the
  intersection of artificial intelligence...
</p>
```

---

## 2. 修改研究方向 → [Research.jsx](src/components/Research.jsx)

每个方向是一个对象，在 `INTERESTS` 数组里增删改：

```jsx
const INTERESTS = [
  {
    title: 'AI Agents',                          // 标题
    description:
      'Building autonomous agents that reason...', // 描述（1-2句话）
  },
  {
    title: '新方向名称',
    description: '简短描述',
  },
  // 添加更多只需追加对象...
]
```

卡片自动按 2 列排列，直接加新对象即可。

---

## 3. 修改项目 → [Projects.jsx](src/components/Projects.jsx)

修改 `PROJECTS` 数组，链接填 `null` 则不显示对应按钮：

```jsx
const PROJECTS = [
  {
    title: '项目名称',
    description: '一两句话描述你做了什么',
    link: 'https://项目网址.com',    // 没有就填 null
    github: 'https://github.com/...', // 没有就填 null
  },
]
```

---

## 4. 修改社交链接 → [Contact.jsx](src/components/Contact.jsx)

修改 `SOCIALS` 数组，图标来自 [react-icons/fi](https://react-icons.github.io/react-icons/icons/fi/)：

```jsx
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const SOCIALS = [
  { href: 'mailto:你的邮箱@example.com', icon: FiMail, label: 'Email' },
  { href: 'https://github.com/你的用户名', icon: FiGithub, label: 'GitHub' },
  { href: 'https://twitter.com/你的用户名', icon: FiTwitter, label: 'Twitter' },
  { href: 'https://linkedin.com/in/你的用户名', icon: FiLinkedin, label: 'LinkedIn' },
]
```

如果想换图标，去 [react-icons 官网](https://react-icons.github.io/react-icons/) 搜索，把 import 和引用改掉即可。

---

## 5. 添加新 Section

比如想加一个 **"Blog"** 栏目：

### Step 1 — 创建组件

新建 `src/components/Blog.jsx`：

```jsx
import './Blog.css'

export default function Blog() {
  return (
    <section id="blog" className="section reveal">
      <div className="container">
        <p className="section-label">Writing</p>
        <h2>Thoughts & notes</h2>
        <p>Coming soon...</p>
      </div>
    </section>
  )
}
```

新建 `src/components/Blog.css`（按需写样式）。

### Step 2 — 注册到 App.jsx

在 [App.jsx](src/App.jsx) 里：

```jsx
import Blog from './components/Blog'  // 1. 顶部加 import

// 2. 在 <main> 里插入组件（放在合适位置）
<main>
  <Hero />
  <About />
  <Research />
  <Projects />
  <Blog />        {/* 新加的 */}
  <Contact />
</main>
```

### Step 3 — 导航栏加链接

在 [Navbar.jsx](src/components/Navbar.jsx) 的 `NAV_LINKS` 里加一项：

```jsx
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },      // 新加的
  { href: '#contact', label: 'Contact' },
]
```

---

## 6. 修改配色 / 字体 / 间距

所有设计变量集中在 [index.css](src/index.css) 的 `:root` 里：

```css
:root {
  --color-bg: #fafaf8;            /* 背景色 */
  --color-surface: #f3f2ef;       /* 卡片底色 */
  --color-text: #1a1a1a;          /* 正文 */
  --color-text-secondary: #6b6b6b;/* 次级文字 */
  --color-accent: #b37400;        /* 链接色 / 强调色 */
  --color-border: #e6e4e0;        /* 边框 */
  --max-width: 680px;             /* 内容最大宽度 */
  --section-gap: 6rem;            /* Section 之间的间距 */
}
```

改 color 值即可全局生效。想换字体？去 [index.html](index.html) 替换 Google Fonts 的 link。

---

## 7. 部署到线上

```bash
# 构建静态文件（输出到 dist/ 目录）
npm run build

# 本地预览构建结果
npm run preview
```

然后把 `dist/` 文件夹部署到任意静态托管平台：

| 平台 | 操作 |
|------|------|
| **Vercel** | `npm i -g vercel` → `vercel` → 一路回车 |
| **Netlify** | 把 `dist/` 文件夹拖到 netlify.com/drop |
| **GitHub Pages** | 推送到 `gh-pages` 分支 |

---

## 快速命令速查

```bash
npm run dev       # 启动开发服务器（热更新）
npm run build     # 构建生产版本到 dist/
npm run preview   # 本地预览生产版本
```
