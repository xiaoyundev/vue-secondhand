# vue-secondhand
# 校园二手交易平台

面向校园场景的二手交易前端 Demo，Vue 3 + Vite 构建，纯前端实现，无后端依赖。

## 线上地址

https://你的域名.netlify.app

## 功能

- 商品列表：关键词搜索、分类筛选、空状态提示
- 商品详情：按路由 id 读取数据，找不到时显示兜底页
- 发布商品：表单校验（名称至少 2 字、价格大于 0），发布后写入列表首位
- 登录：昵称登录，基于 localStorage 保存状态
- 权限：未登录访问「我的」会被路由守卫拦截，登录后回到原页面

## 技术栈

Vue 3（组合式 API）、Vue Router 4、Vite

## 本地运行

npm install
npm run dev

打开 http://localhost:5173

## 构建

npm run build
npm run preview

## 目录结构

src/
├─ views/        页面：首页 / 列表 / 详情 / 发布 / 登录 / 我的
├─ router/       路由表与全局守卫
├─ data/         商品数据（reactive 数组）
├─ auth.js       登录状态读写
└─ App.vue       导航与路由出口

## 已知限制

- 数据存于内存，刷新后恢复初始 8 条
- 未接入后端接口，图片使用 picsum 占位图
- 仅完成前端，暂无真实账号体系