<template>
  <transition name="fade" mode="out-in">
    <el-icon v-if="isActive">
      <Expand />
    </el-icon>
    <el-icon v-else>
      <Fold />
    </el-icon>
  </transition>
</template>

<script setup>
const props = defineProps(['isActive'])
</script>

<style lang="scss" scoped>
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>