<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="elFormRef" class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" placeholder="账号" auto-complete="off" v-model="loginForm.account"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="密码" auto-complete="off" v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item class="btns">
      <el-button @click.native.prevent="handleReset">重 置</el-button>
      <el-button type="primary" @click.native.prevent="handleLogin">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import Cookie from 'js-cookie';
import { login } from '@/http'
import '@/mock'

const router = useRouter();

const elFormRef = ref(null)
const loginForm = reactive({
  account: 'admin',
  password: '123456'
})

// 表单验证规则，需要给 form-item 指定对应的 prop
const fieldRules = {
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
}

const handleLogin = () => {
  const userInfo = { account: loginForm.account, password: loginForm.password }

  login(JSON.stringify(userInfo)).then(res => {
    // console.log(res.data);
    Cookie.set('token', res.data.token)
    sessionStorage.setItem('user', userInfo.account)
    router.push('/')
  }).catch(err => { console.log(err) })
}

const handleReset = () => {
  elFormRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: #505458;
    margin-bottom: 40px;
  }

  .el-form-item {
    width: 100%;
    margin-bottom: 25px;

    button {
      flex: 1
    }
  }
}
</style>
