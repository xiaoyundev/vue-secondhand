<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {addItem} from '../data/items.js'

const router = useRouter()
const errors = reactive({title:'',price:''})

const form = reactive({
    title:'',
    price:'',
    category:'数码',
    location:'南校区',
})

function validate() {
  errors.title = ''
  errors.price = ''

  if (form.title.trim().length < 2) {
    errors.title = '名称至少 2 个字'
  }

  const price = Number(form.price)
  if (!Number.isFinite(price) || price <= 0) {
    errors.price = '价格要填大于 0 的数字'
  }

  return !errors.title && !errors.price
}

function submit() {
  if (!validate()) return

  addItem({
    title: form.title.trim(),
    price: Number(form.price),
    category: form.category,
    location: form.location,
    cover: 'https://picsum.photos/seed/' + Date.now() + '/600/400',
  })

  router.push('/list')
}
</script>
<template>
  <form class="form" @submit.prevent="submit">
    <h2 class="title">发布商品</h2>

    <label class="row">
      <span class="lb">商品名称</span>
      <input v-model="form.title" type="text" placeholder="例如：九成新机械键盘" @input="errors.title = ''" />
      <em v-if="errors.title" class="err">{{ errors.title }}</em>
    </label>

    <label class="row">
      <span class="lb">价格（元）</span>
      <input v-model="form.price" type="number" min="0" placeholder="例如：120"  @input="errors.price = ''" />
      <em v-if="errors.price" class="err">{{ errors.price }}</em>
    </label>

    <label class="row">
      <span class="lb">分类</span>
      <select v-model="form.category">
        <option>数码</option>
        <option>书籍</option>
        <option>生活</option>
        <option>服饰</option>
        <option>交通</option>
        <option>乐器</option>
      </select>
    </label>

    <label class="row">
      <span class="lb">交易地点</span>
      <select v-model="form.location">
        <option>南校区</option>
        <option>北校区</option>
        <option>东区</option>
        <option>西区</option>
      </select>
    </label>

    <button class="submit" type="submit">发布</button>
  </form>
</template>
<style scoped>
.form { max-width: 460px; }
.title { font-size: 1.05rem; margin-bottom: 1rem; }
.row { display: block; margin-bottom: 1rem; }
.lb { display: block; font-size: .8rem; color: #4A4842; margin-bottom: .3rem; }
input, select { width: 100%; padding: .5rem .7rem; font-size: .85rem;
  border: 1px solid #E3DFD2; border-radius: 8px; background: #fff; outline: none; }
input:focus, select:focus { border-color: #22603F; }
.err { display: block; font-size: .74rem; color: #B45C31;
  margin-top: .25rem; font-style: normal; }
.submit { margin-top: .6rem; padding: .5rem 1.2rem; font-size: .86rem;
  border: 1px solid #22603F; background: #22603F; color: #fff;
  border-radius: 8px; cursor: pointer; }
</style>