<template>
  <div v-if="show">
    <q-btn-dropdown
      flat
      dense
      no-caps
      size="sm"
    >
      <template v-slot:label>
        <q-chip
          size="sm"
        >
          <q-avatar
            size="sm"
          >
            <img :src="avatarURL">
          </q-avatar>
          {{ userName }}
        </q-chip>
      </template>
      <q-list v-for="action in avatarActions" :key="action.title">
        <q-item clickable v-close-popup @click="action.handler">
          <q-item-section>
            <q-item-label>{{action.title}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <div v-else>
    <!-- 注册 -->
    <q-btn
      flat
      dense
      round
      icon="person_add"
      aria-label="Menu"
      @click="register"
    />
  </div>
</template>

<script lang="ts" setup>

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  userName: {
    type: String,
    required: false,
    default: ''
  },
  avatarActions: {
    type: Array,
    required: false,
    default: () => []
  },
  avatarURL: {
    type: String,
    required: false,
    default: ''
  },
  register: {
    type: Function,
    required: false,
    default: () => {
      console.log('register')
    }
  }
})
</script>
