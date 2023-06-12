<template>
  <el-breadcrumb separator="/" class="bread-crumb__inner">
    <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="item.path">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router';
// 需要从路由获取面包屑导航的相关信息
const route = useRoute()
// console.log(route.matched);
</script>

<style lang="scss" scoped>
.bread-crumb__inner {
  line-height: 30px;
}
</style>