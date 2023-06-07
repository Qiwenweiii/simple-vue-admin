<template>
  <div class="page">
    <h2>Home page</h2>
    <el-button type="primary" @click="getUser">Get User</el-button>
    <el-button type="primary" @click="getMenu">Get Menu</el-button>
  </div>
</template>

<script setup>
import axios from "axios"
// 导入 mock.js 进行请求拦截
import '../mock/mock.js'

const getUser = () => {
  axios.get('/user')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

const getMenu = () => {
  axios.get('/menu')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
</script>