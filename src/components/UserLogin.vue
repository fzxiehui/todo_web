<template>
 <q-dialog v-model="show">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-card-section>
        <q-form 
          @submit="submitHandler"
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
        </q-form>
      </q-card-section>
      <q-inner-loading
        :showing="visible"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
      <q-card-actions align="right">
        <q-btn
          flat
          label="取消"
          color="primary"
          @click="closeHandler"
        />
        <q-btn
          flat
          label="登录"
          color="primary"
          type="submit"
          @click="submitHandler"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const show = ref(true);
const username = ref('');
const password = ref('');
const visible = ref(false);

const closeHandler = () => {
  show.value = false;
};

const submitHandler = () => {
  console.log('submit');
  visible.value = true;
};


</script>
