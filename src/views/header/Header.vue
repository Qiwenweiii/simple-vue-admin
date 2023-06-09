<template>
  <el-header class="header">
    <div class="tools" @click="$emit('collapse')">
      <el-icon>
        <Menu />
      </el-icon>
    </div>
    <div class="nav-bar">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">{{ $t('common.home') }}</el-menu-item>
        <el-menu-item index="2">消息中心</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </div>
    <div class="user-info">
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()

const emits = defineEmits(['collapse'])

const userAvatarSrc = ref('https://img.zcool.cn/community/01feb15d6de34da801211f9ea7f4a3.jpg@1280w_1l_2o_100sh.jpg')
const userName = ref('')
const { locale } = useI18n()

onMounted(() => {
  const user = sessionStorage.getItem('user')

  if (user) {
    userName.value = user
  }
})

const handleCommand = (command = 'zh') => {
  locale.value = command
}

const logout = () => {
  sessionStorage.removeItem('user')
  router.push('/login')
}

</script>

<style lang="scss" scoped>
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

  .user-info {
    display: flex;
    gap: 20px;

    .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      color: #fff;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>