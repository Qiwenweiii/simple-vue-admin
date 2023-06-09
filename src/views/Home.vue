<template>
  <el-container class="container">
    <el-aside :width="isCollapsed ? '64px' : '200px'" class="aside">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="">
        <transition name="fade">
          <span v-if="!isCollapsed">Qiwenweiii</span>
        </transition>
      </div>
      <el-menu default-active="1" :collapse="isCollapsed">
        <el-sub-menu index="1">
          <template #title>
            <el-icon :size="20">
              <Location />
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
          <el-icon>
            <Menu />
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="tools" @click="handleCollapse">
          <el-icon>
            <Menu />
          </el-icon>
        </div>
        <div class="nav-bar">
          <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">消息中心</el-menu-item>
            <el-menu-item index="3">订单管理</el-menu-item>
          </el-menu>
        </div>
        <div class="user-info">
          <el-dropdown>
            <span class="el-dropdown-link">
              Username <el-avatar shape="square" :src="userAvatarSrc" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
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
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false)
const userAvatarSrc = ref('https://img.zcool.cn/community/01feb15d6de34da801211f9ea7f4a3.jpg@1280w_1l_2o_100sh.jpg')

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;

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

  .header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #485460;
    color: #fff;
    overflow: hidden;

    .el-menu {
      background-color: transparent;
      color: #fff;
      border: none;
      height: 50px;
    }

    .tools {
      cursor: pointer;
    }

    .tools:hover {
      color: #409eff
    }

    .nav-bar {
      flex: 1;

      .el-menu li {
        color: #fff;

        .is_active {
          border-bottom: 1px solid #ffd04b;
        }
      }

    }

    .user-info .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }

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
}
</style>