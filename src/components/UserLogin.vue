<template>
  <!-- <div v-if="show"> -->
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Login</div>
    </q-card-section>
    <q-card-section>
      <q-form 
        @submit="submit"
      >
        <q-input
          filled
          v-model="username"
          label="用户名"
          lazy-rules
          :rules="[
            val => !!val || '请输入用户名',
            val => val.length >= 5 || '用户名长度至少为5位'
          ]"
        />
        <q-input
          filled
          v-model="password"
          label="密码"
          lazy-rules
          type="password"
          :rules="[
            val => !!val || '请输入密码',
            val => val.length >= 6 || '密码长度至少为6位'
          ]"
        />
        <div align="right">
          <q-btn
            flat
            label="取消"
            color="primary"
            @click="close"
          />
          <q-btn
            flat
            label="登录"
            color="primary"
            type="submit"
          />
          <q-inner-loading
            :showing="loading"
            label="Please wait..."
            label-class="text-teal"
            label-style="font-size: 1.1em"
          />
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions align="right">
    </q-card-actions>
  </q-card>
  <!-- </div> -->
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { useUserStore } from 'stores/user';

const store = useUserStore();
const username = ref('');
const password = ref('');

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'login']);


const close = () => {
  emit('close');
};

const submit = () => {
// async function submit() {
  emit('login', {
      username: username.value,
      password: password.value
    });
};


</script>
