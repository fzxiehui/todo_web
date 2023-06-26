<template>
 <q-dialog v-model="show">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Register</div>
      </q-card-section>
      <q-card-section>
        <q-form 
          @submit="submitHandler"
        >
          <q-input
            filled
            v-model="nickname"
            label="昵称"
            lazy-rules
            :rules="[
              val => !!val || '请输入昵称'
            ]"
          />
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
          <q-input
            filled
            v-model="password2"
            label="确认密码"
            lazy-rules
            type="password"
            :rules="[
              val => !!val || '请确认密码',
              val => val === password || '两次密码输入不一致'
            ]"
          />
          <div align="right">
            <q-btn
              flat
              label="取消"
              color="primary"
              @click="closeHandler"
            />
            <q-btn
              flat
              label="注册"
              color="primary"
              type="submit"
              @click="submitHandler"
            >
              <q-tooltip class="bg-red" :offset="[10, 10]">
                Register
              </q-tooltip>
            </q-btn>
          </div>
       </q-form>
      </q-card-section>
      <q-inner-loading
        :showing="visible"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
      <!--
      <q-card-actions align="right">
      </q-card-actions>
      -->
    </q-card>
  </q-dialog>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
const visible = ref(false)

const nickname = ref('')
const username = ref('')
const password = ref('')
const password2 = ref('')

const closeHandler = () => {
  show.value = false
}

const submitHandler = () => {
  setTimeout(() => {
    visible.value = false
    show.value = false
  }, 2000)
}

</script>
