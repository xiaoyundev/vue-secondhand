<script setup>
import { ref, computed } from 'vue'
import { items } from '../data/items.js'

const keyword = ref('')
const activeCategory = ref('全部')

const filtered = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return items.filter((item) => {
    const matchCategory =
      activeCategory.value === '全部' || item.category === activeCategory.value
    const matchKeyword =
      kw === '' || item.title.toLowerCase().includes(kw)
    return matchCategory && matchKeyword
  })
})

const categories = computed(() => {
  const all = items.map((item) => item.category)
  return ['全部', ...new Set(all)]
})

function resetAll() {
  keyword.value = ''
  activeCategory.value = '全部'
}
</script>

<template>
  <div class="bar">
  <input v-model="keyword" class="search" type="search"
         placeholder="搜索商品名称，如 Kindle" />
</div>
<div class="filters">
  <button v-for="c in categories" :key="c" class="chip"
          :class="{ on: activeCategory === c }"
          @click="activeCategory = c">{{ c }}</button>
</div>
  <p class="count">共 {{ filtered.length }} 件</p>

<div v-if="filtered.length" class="list">
  <div class="item" v-for="item in filtered" :key="item.id">
  <div class="cover" :style="{ backgroundImage: `url(${item.cover})` }"></div>
    <div class="body">
      <h3 class="title">{{ item.title }}</h3>
      <p class="price">¥ {{ item.price }}</p>
      <p class="meta">{{ item.category }} · {{ item.location }}</p>
    </div>
  </div>
</div>

<div v-else class="empty">
  <p class="empty-t">没有找到相关商品</p>
  <p class="empty-s">换一个关键词，或切换分类试试</p>
  <button class="btn" @click="resetAll">查看全部</button>
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
.bar { display: flex; gap: .5rem; margin-bottom: .9rem; }
.search { flex: 1; padding: .55rem .8rem; font-size: .88rem;
  border: 1px solid #E3DFD2; border-radius: 8px; background: #fff; outline: none; }
.search:focus { border-color: #22603F; }
.filters { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: .8rem; }
.chip { font-size: .78rem; padding: .25rem .7rem; border-radius: 99px;
  border: 1px solid #E3DFD2; background: #fff; color: #4A4842; cursor: pointer; }
.chip.on { background: #22603F; border-color: #22603F; color: #fff; }
.count { font-size: .78rem; color: #7B786E; margin-bottom: .8rem; }
.empty { padding: 3rem 1rem; text-align: center;
  border: 1px dashed #E3DFD2; border-radius: 10px; }
.empty-t { font-size: .92rem; margin-bottom: .3rem; }
.empty-s { font-size: .8rem; color: #7B786E; }
.btn { margin-top: .8rem; padding: .4rem 1rem; font-size: .82rem;
  border: 1px solid #22603F; background: #22603F; color: #fff;
  border-radius: 8px; cursor: pointer; }
</style>