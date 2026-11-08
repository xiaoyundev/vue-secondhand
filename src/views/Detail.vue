<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { items } from '../data/items.js'

const route = useRoute()
const router = useRouter()

const item = computed(() =>
  items.find((i) => i.id === Number(route.params.id))
)
</script>
<template>
  <div v-if="item" class="detail">
    <div class="cover" :style="{ backgroundImage: `url(${item.cover})` }"></div>
    <h2 class="title">{{ item.title }}</h2>
    <p class="price">¥ {{ item.price }}</p>
    <p class="meta">{{ item.category }} · {{ item.location }}</p>
    <p class="desc">成色良好，可当面交易。有意请联系发布者。</p>
    <div class="actions">
      <button class="btn" @click="router.back()">返回上页</button>
      <RouterLink class="btn ghost" to="/list">回到列表</RouterLink>
    </div>
  </div>

  <div v-else class="missing">
    <p>没有这件商品（id: {{ route.params.id }}）</p>
    <RouterLink to="/list">回到列表</RouterLink>
  </div>
</template>
<style scoped>
.detail { max-width: 520px; margin: 0 auto; }
.cover { height: 260px; border-radius: 10px; overflow: hidden;
  background: #F2EFE6 center/cover no-repeat; }
.title { font-size: 1.15rem; line-height: 1.4; margin: 1rem 0 .4rem; }
.price { color: #B45C31; font-weight: 700; font-size: 1.3rem; margin-bottom: .3rem; }
.meta { font-size: .8rem; color: #7B786E; margin-bottom: 1rem; }
.desc { font-size: .88rem; line-height: 1.8; padding-top: 1rem;
  border-top: 1px solid #E3DFD2; }
.actions { display: flex; gap: .6rem; margin-top: 1.4rem; }
.btn { padding: .5rem 1.1rem; font-size: .85rem; border-radius: 8px; cursor: pointer;
  border: 1px solid #22603F; background: #22603F; color: #fff; }
.btn.ghost { background: #fff; color: #22603F; text-decoration: none; }
.missing { padding: 3rem 1rem; text-align: center; font-size: .9rem;
  border: 1px dashed #E3DFD2; border-radius: 10px; }
.missing a { color: #22603F; }
</style>