<script setup>
import { items } from '../data/items.js'
</script>

<template>
  <div class="list">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="cover" :style="{ backgroundImage: `url(${item.cover})` }"></div>
      <div class="body">
        <h3 class="title">{{ item.title }}</h3>
        <p class="price">¥ {{ item.price }}</p>
        <p class="meta">{{ item.category }} · {{ item.location }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.item { background: #fff; border: 1px solid #E3DFD2; border-radius: 10px; overflow: hidden; }
.cover { height: 140px; background: #F2EFE6 center/cover no-repeat; }
.body { padding: .7rem .85rem .9rem; }
.title { font-size: .92rem; line-height: 1.4; margin-bottom: .35rem;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.price { color: #B45C31; font-weight: 700; font-size: 1rem; margin-bottom: .2rem; }
.meta { font-size: .76rem; color: #7B786E; }

@media (max-width: 480px) {
  .list { grid-template-columns: 1fr; }
  .cover { height: 180px; }
}
</style>