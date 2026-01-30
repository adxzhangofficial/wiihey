# Wiihey 官网

基于 React + TypeScript + Vite 构建的 Wiihey 公司官方网站，展示公司产品、解决方案和案例。

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 7
- **路由**: React Router DOM 7
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: Lucide React
- **包管理器**: pnpm

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 代码检查
pnpm lint
```

## 项目结构

```
wiihey-website/
├── public/                    # 静态资源
│   └── images/               # 图片资源
│       ├── about/            # 关于我们页面图片
│       ├── cases/            # 案例图片
│       ├── contact/          # 联系我们图片
│       ├── hero/             # 首页轮播图
│       ├── icons/            # 图标
│       ├── logo/             # Logo 资源
│       ├── products/         # 产品图片
│       │   ├── datacollection/   # 数据采集产品
│       │   ├── environment/      # 环境监测产品
│       │   ├── manhole/          # 智能井盖产品
│       │   ├── positioning/      # 定位产品
│       │   └── structure/        # 结构监测产品
│       ├── solutions/        # 解决方案图片
│       │   ├── bridge/           # 桥梁安全监测
│       │   ├── confined-space/   # 有限空间安全
│       │   ├── construction/     # 工程建筑安全
│       │   ├── datacenter/       # 机房动环监控
│       │   ├── geological/       # 地质灾害监测
│       │   ├── openharmony/      # 开源鸿蒙方案
│       │   ├── slope/            # 边坡安全监测
│       │   ├── smart-manhole/    # 智能井盖方案
│       │   ├── tunnel/           # 隧道积水监测
│       │   ├── water-resources/  # 智慧水利
│       │   └── water-service/    # 智慧水务
│       └── tech/             # 技术展示图片
├── scripts/                  # 工具脚本
│   └── organize-images.mjs   # 图片整理脚本
├── src/                      # 源代码
│   ├── assets/               # 资源文件
│   ├── components/           # 组件
│   │   ├── common/           # 通用组件
│   │   │   ├── Button.tsx        # 按钮组件
│   │   │   ├── CaseCard.tsx      # 案例卡片
│   │   │   ├── ProductCard.tsx   # 产品卡片
│   │   │   ├── SectionTitle.tsx  # 区块标题
│   │   │   └── SolutionCard.tsx  # 解决方案卡片
│   │   ├── layout/           # 布局组件
│   │   │   ├── Footer.tsx        # 页脚
│   │   │   ├── MainLayout.tsx    # 主布局
│   │   │   └── Navbar.tsx        # 导航栏
│   │   └── sections/         # 首页区块组件
│   │       ├── CoreCapabilities.tsx  # 核心能力
│   │       ├── Hero.tsx              # 首页轮播
│   │       ├── ProductsPreview.tsx   # 产品预览
│   │       └── SolutionsPreview.tsx  # 方案预览
│   ├── data/                 # 数据文件
│   │   ├── cases.ts          # 案例数据
│   │   ├── products.ts       # 产品数据
│   │   └── solutions.ts      # 解决方案数据
│   ├── pages/                # 页面组件
│   │   ├── About.tsx         # 关于我们
│   │   ├── Cases.tsx         # 案例展示
│   │   ├── Contact.tsx       # 联系我们
│   │   ├── Home.tsx          # 首页
│   │   ├── ProductCategory.tsx   # 产品分类详情
│   │   ├── Products.tsx      # 产品中心
│   │   ├── SolutionDetail.tsx    # 解决方案详情
│   │   └── Solutions.tsx     # 解决方案
│   ├── styles/               # 样式文件
│   ├── App.tsx               # 根组件
│   ├── App.css               # 根组件样式
│   ├── index.css             # 全局样式
│   ├── main.tsx              # 入口文件
│   └── routes.tsx            # 路由配置
├── index.html                # HTML 模板
├── package.json              # 项目配置
├── tailwind.config.js        # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── vite.config.ts            # Vite 配置
```

## 页面路由

| 路由                    | 页面              | 说明                 |
| ----------------------- | ----------------- | -------------------- |
| `/`                     | Home              | 首页                 |
| `/about`                | About             | 关于我们             |
| `/products`             | Products          | 产品中心             |
| `/products/:category`   | ProductCategory   | 产品分类详情页       |
| `/solutions`            | Solutions         | 解决方案             |
| `/solutions/:id`        | SolutionDetail    | 解决方案详情页       |
| `/cases`                | Cases             | 案例展示             |
| `/contact`              | Contact           | 联系我们             |

## 产品分类

- **智能井盖产品系列** (`manhole`) - 基于 OpenHarmony 系统的智能井盖传感器
- **环境监测产品系列** (`environment`) - 水位、气体等环境监测设备
- **结构监测产品系列** (`structure`) - 建筑结构安全监测设备
- **数据采集产品系列** (`datacollection`) - 边缘计算与云端协同数据采集
- **定位产品系列** (`positioning`) - 高精度定位设备

## 解决方案

- **开源鸿蒙解决方案** - 物联网系统级解决方案
- **鸿蒙智能井盖解决方案** - 城市井盖智能化监测
- **隧道积水监测解决方案** - 隧道安全监测系统
- **边坡安全监测解决方案** - 边坡稳定性预警
- **桥梁安全监测解决方案** - 桥梁结构健康监测
- **有限空间安全解决方案** - 有限空间作业安全
- **智慧水务解决方案** - 城市水务智能管理
- **智慧水利解决方案** - 水利设施监测
- **工程建筑安全解决方案** - 建筑工程安全监测
- **机房动环监控解决方案** - 数据中心环境监控
- **地质灾害监测解决方案** - 地质灾害预警系统

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录创建页面组件
2. 在 `src/routes.tsx` 中添加路由配置
3. 如需导航链接，在 `src/components/layout/Navbar.tsx` 中添加

### 添加新产品/解决方案

1. 在 `src/data/products.ts` 或 `src/data/solutions.ts` 中添加数据
2. 将相关图片放入 `public/images/` 对应目录

### 图片整理

使用脚本整理 PPT 提取的图片：

```bash
node scripts/organize-images.mjs
```

## License

Private
