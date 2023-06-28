<template>
  <q-toolbar-title>
    TODO
  </q-toolbar-title>
  <!-- 
    用户头像 
    @userName 用户名 String
    @avatarActions 用户头像下拉菜单 Array
      @title 菜单标题 String
      @handler 菜单点击事件 Function
    @avatarURL 用户头像 URL String
    @register 注册事件 Function
    @show 是否显示 Boolean
  -->
  <TopAvatar 
    :userName="username"
    :avatarActions="avatarActions"
    :avatarURL="avatarURL"
    :show="showAvatar"
  />

  
  <q-dialog v-model="showLogin">
    <UserLogin
      :loading="loginLoading"
      @close="() => { showLogin = false; }"
      @login="loginHandler"
    />
  </q-dialog>
  <!--
  <UserRegister
    :show="showRegister"
  />
  -->
</template>


<script lang="ts" setup>

import { ref } from 'vue';
import TopAvatar from 'src/pages/title/TopAvatar.vue';
import UserLogin from 'components/UserLogin.vue';
import UserRegister from 'components/UserRegister.vue';
import { useUserStore } from 'stores/user';

const store = useUserStore();

/**
 * 登录注册
 */
const showLogin = ref(false)
// const showRegister = ref(false)
const showAvatar = ref(true)

const loginLoading = ref(false)

/**
 * 用户信息
 */
const username = 'hello'


const avatarActions = [
  {
    title: 'Login',
    icon: 'photo',
    handler: () => {
      console.log('Login');
      showLogin.value = true
    }
  },
  {
    title: 'Register',
    icon: 'videocam',
    handler: () => {
      console.log('Register');
      console.log(showLogin.value);
    }
  },
  {
    title: 'Logout',
    icon: 'videocam',
    handler: () => {
      console.log('Logout');
      showAvatar.value = false
    }
  }
];

const avatarURL = 'icons/avatar.jpg'

const loginHandler = (data: any) => {
  loginLoading.value = true
  const { login } = store;
  login(data).then(() => {
    showLogin.value = false
    showAvatar.value = true
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loginLoading.value = false
  })
}


</script>
