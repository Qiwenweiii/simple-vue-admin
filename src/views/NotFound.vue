<template>
  <div class="container">
    <h2 class="title">404</h2>
    <p class="desc">抱歉！您访问的页面<em>失联</em>啦...</p>
    <div class="btns">
      <el-button @click="goBack">返回上一页</el-button>
      <el-button type="primary" @click="goHome">进入首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1)
}
const goHome = () => {
  // 使用 replace，使页面不能通过回退按钮返回到 404 页面
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .title {
    font-size: 10rem;
    color: #34495e;
    margin: 0;
    padding: 0;
  }

  .desc {
    font-size: 2rem;
    color: #95a5a6;

    em {
      font-style: normal;
      color: #ee5253;
      margin: 0 5px;
    }
  }

  .btns {
    display: flex;
    gap: 30px;

    button {
      padding: 20px;
      font-weight: 400;
    }
  }
}
</style>