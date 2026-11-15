<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getUser, clearUser } from '../auth.js'

const router = useRouter()
const name = computed(() => getUser())

function logout() {
  clearUser()
  router.push('/')
}
</script>

<template>
  <div class="mine">
    <h2 class="title">我的</h2>
    <p class="row"><span>当前用户</span><b>{{ name }}</b></p>
    <p class="tip">登录状态保存在浏览器 localStorage，换设备要重新登录。</p>
    <button class="btn" @click="logout">退出登录</button>
  </div>
</template>

<style scoped>
.mine { max-width: 420px; }
.title { font-size: 1.05rem; margin-bottom: 1rem; }
.row { display: flex; justify-content: space-between; font-size: .86rem;
  padding: .6rem .8rem; background: #fff; border: 1px solid #E3DFD2;
  border-radius: 8px; }
.tip { font-size: .76rem; color: #7B786E; margin: .7rem 0 1rem; }
.btn { padding: .45rem 1rem; font-size: .82rem; border-radius: 8px;
  cursor: pointer; border: 1px solid #B45C31; background: #fff; color: #B45C31; }
</style>