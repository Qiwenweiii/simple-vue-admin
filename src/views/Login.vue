<template>
  <div class="page">
    <h2>This is an login page</h2>
    <el-button type="primary" @click="handleLogin">Login</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Cookie from 'js-cookie';
import { login } from '@/http/interface'
import '@/mock'

const router = useRouter();

const handleLogin = () => {
  login().then(res => {
    console.log(res.data)
    Cookie.set('token', res.data.token)
    router.push('/')
  }).catch(err => console.log(err))
}
</script>

<style></style>
