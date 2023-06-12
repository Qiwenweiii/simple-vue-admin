<template>
  <!-- command 是点击菜单项触发的事件回调 -->
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ locale === 'zh' ? '简体中文' : 'English' }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- command 是派发到上面的回调函数的参数 -->
        <el-dropdown-item command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const handleCommand = (command = 'zh') => {
  locale.value = command
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #fff;
  cursor: pointer;
  outline: none;
}
</style>