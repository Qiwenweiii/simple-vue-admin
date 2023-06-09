<template>
  <el-main class="main">
    <el-row class="bread-crumb">
      <el-col :span="24">
        <el-breadcrumb separator="/" class="bread-crumb__inner">
          <el-breadcrumb-item>homepage</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
  margin: 0;
  padding: 0;

  .bread-crumb {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    font-size: 0.9em;

    .bread-crumb__inner {
      line-height: 30px;
    }
  }
}
</style>