<template>
  <el-aside :width="isCollapsed ? '64px' : '200px'" class="aside">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="">
      <transition name="fade">
        <span v-if="!isCollapsed">Qiwenweiii</span>
      </transition>
    </div>
    <el-menu default-active="/" :collapse="isCollapsed" :router="true">
      <el-sub-menu index="/">
        <template #title>
          <el-icon :size="20">
            <Location />
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/user">{{ $t('sys.userMng') }}</el-menu-item>
        <el-menu-item index="/agencies">{{ $t('sys.deptMng') }}</el-menu-item>
        <el-menu-item index="/role">{{ $t('sys.roleMng') }}</el-menu-item>
        <el-menu-item index="/menu">{{ $t('sys.menuMng') }}</el-menu-item>
        <el-menu-item index="/log">{{ $t('sys.logMng') }}</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <Menu />
        </el-icon>
        <span>系统监控</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <Document />
        </el-icon>
        <span>导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Setting />
        </el-icon>
        <span>导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
const props = defineProps(['isCollapsed'])
</script>

<style lang="scss" scoped>
.aside {
  border-right: 1px solid #ccc;
  transition: all .5s ease-in-out;

  .logo {
    height: 50px;
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    background-color: #485460;
    color: #fff;

    img {
      width: 35px;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: all .5s ease-in-out;
    }
  }

  .el-menu {
    border: none;
  }
}
</style>