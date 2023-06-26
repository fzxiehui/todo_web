<template>
  <!-- 
    Docs: 
      http://www.quasarchs.com/layout/layout 
    查看 view 属性

    Icon:
      https://fonts.google.com/icons?icon.set=Material+Icons
  -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

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
          show
        />
        <UserLogin/>
        <UserRegister/>
      </q-toolbar>
    </q-header>

    <!-- 左侧抽屉 -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          TODO List

          <!-- 
            代办事项搜索框
            @searchHandler 搜索事件 Function 必填
          -->
          <TodoSearch 
            :searchHandler="searchHandler"
            :closeHandler="closeHandler"
          />
        </q-item-label>

        <ToDoList
          :todoList="todoList"
          :temporaryList="temporaryList"
          :clickHandler="clickHandler"
          :loading="searchloading"
        />
      </q-list>
    </q-drawer>

    <!-- 主体内容 -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TopAvatar from 'components/TopAvatar.vue';
import TodoSearch from 'components/TodoSearch.vue';
import ToDoList from 'components/ToDoList.vue';
import UserLogin from 'components/UserLogin.vue';
import UserRegister from 'components/UserRegister.vue';

var searchloading = ref(false);

const todoList = ref([
  {
    id: 1,
    icon: 'school',
    title: '罗老师',
    desc: '罗老师刑法小课堂',
    done: false
  },
  {
    id: 2,
    icon: 'school',
    title: '张三',
    desc: '张三现身说法',
    done: false
  },
  {
    id: 3,
    icon: 'build',
    title: '专业名词',
    desc: '很刑,可拷',
    done: false
  }
]);

const temporaryList = ref([]);


const username = 'hello'

const avatarActions = [
  {
    title: 'Photos',
    icon: 'photo',
    handler: () => {
      console.log('Photos');
    }
  },
  {
    title: 'Videos',
    icon: 'videocam',
    handler: () => {
      console.log('Videos');
    }
  }
];

const leftDrawerOpen = ref(false)
const avatarURL = 'icons/avatar.jpg'
// const text = '' 

function searchHandler (value: string) {
  console.log('searchHandler')
  searchloading.value = true
  console.log(value)
};

function clickHandler (item: any) {
  console.log('clickHandler')
  console.log(item)
};

function closeHandler () {
  console.log('closeHandler')
  searchloading.value = false
};

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
};

</script>
