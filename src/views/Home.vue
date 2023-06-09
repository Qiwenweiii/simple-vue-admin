<template>
  <el-container class="container">
    <Aside :isCollapsed="isCollapsed" />
    <el-container class="container-inner">
      <Header @collapse="handleCollapse" />
      <Content />
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import Aside from './aside/Aside.vue';
import Header from './header/Header.vue';
import Content from './main/Content.vue';

const isCollapsed = ref(false)

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

  .container-inner {
    flex-direction: column;
  }
}
</style>