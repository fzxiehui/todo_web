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
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- 主体内容 -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import TopAvatar from 'components/TopAvatar.vue';


const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    TopAvatar
  },

  setup () {
    const username = "hello"

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
    const avatarURL = "public/icons/avatar.jpg"

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      username,
      avatarURL,
      avatarActions,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
