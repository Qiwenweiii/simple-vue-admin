<template>
  <el-container class="container">
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
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/agencies">机构管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/log">日志管理</el-menu-item>
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
              {{ userName }} <el-avatar shape="square" :src="userAvatarSrc" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapsed = ref(false)
const userAvatarSrc = ref('https://img.zcool.cn/community/01feb15d6de34da801211f9ea7f4a3.jpg@1280w_1l_2o_100sh.jpg')
const userName = ref('')

onMounted(() => {
  const user = sessionStorage.getItem('user')

  if (user) {
    userName.value = user
  }
})

const handleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const logout = () => {
  sessionStorage.removeItem('user')
  router.push('/login')
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