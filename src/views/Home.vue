<template>
  <el-container class="container">
    <el-aside :width="isCollapsed ? '75px' : '200px'" class="aside">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="">{{ isCollapsed ? '' : 'Qiwenweiii' }}
      </div>
      <el-menu default-active="1" :collapse="isCollapsed">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="nav-bar">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4">Orders</el-menu-item>
          </el-menu>
        </div>
        <div class="user-info">
          <el-dropdown>
            <span class="el-dropdown-link">
              Username
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main"></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
const isCollapsed = false
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

  .aside {
    border-right: 1px solid #ccc;

    .logo {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      img {
        width: 35px;
      }
    }

    .el-menu {
      border: none;
    }
  }

  .header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    overflow: hidden;

    .nav-bar {
      flex: 1;

      .el-menu {
        border: none;
        background-color: none;
      }
    }
  }
}
</style>