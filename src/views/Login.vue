<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { saveUser } from '../auth.js'

const route = useRoute()
const router = useRouter()

const name = ref('')
const error = ref('')

function submit() {
  if (name.value.trim().length < 2) {
    error.value = '昵称至少 2 个字'
    return
  }
  saveUser(name.value.trim())
  router.replace(route.query.redirect || '/')
}
</script>

<template>
  <form class="login" @submit.prevent="submit">
    <h2 class="title">登录</h2>
    <p class="tip">输入昵称即可，本站不涉及真实账号。</p>
    <input v-model="name" class="input" type="text" placeholder="昵称，如 小孟" />
    <p v-if="error" class="err">{{ error }}</p>
    <button class="btn" type="submit">进入</button>
  </form>
</template>

<style scoped>
.login { max-width: 380px; margin: 2rem auto; }
.title { font-size: 1.1rem; margin-bottom: .4rem; }
.tip { font-size: .78rem; color: #7B786E; margin-bottom: 1rem; }
.input { width: 100%; padding: .55rem .7rem; font-size: .86rem;
  border: 1px solid #E3DFD2; border-radius: 8px; outline: none; }
.input:focus { border-color: #22603F; }
.err { font-size: .76rem; color: #B45C31; margin-top: .4rem; }
.btn { margin-top: 1rem; width: 100%; padding: .5rem; font-size: .86rem;
  border: 1px solid #22603F; background: #22603F; color: #fff;
  border-radius: 8px; cursor: pointer; }
</style>