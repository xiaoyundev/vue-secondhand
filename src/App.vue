<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/list">列表</RouterLink>
      <RouterLink to="/detail/1">详情</RouterLink>
    </nav>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app { max-width: 720px; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
.nav { display: flex; gap: 1rem; padding-bottom: .8rem; border-bottom: 1px solid #E3DFD2; }
.nav a { color: #4A4842; text-decoration: none; font-size: .9rem; }
.nav a.router-link-active { color: #22603F; font-weight: 700; }
.main { padding-top: 1.2rem; }
</style>