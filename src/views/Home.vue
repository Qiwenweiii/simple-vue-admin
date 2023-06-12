<template>
  <el-container class="container">
    <Aside />
    <el-container class="container-inner">
      <Header />
      <Content />
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './aside/Aside.vue';
import Header from './header/Header.vue';
import Content from './main/Content.vue';

</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

  .container-inner {
    flex-direction: column;
  }
}
</style>