<template>
  
  <div 
    class="row items-center justify-evenly"
    v-if="loading"
  >
    <q-spinner-cube
      v-if="loading"
      color="primary"
      size="3em"
    />
  </div>

  <div 
    v-if="!loading"
  >
    <q-item 
      v-for="item in todoList" 
      :key="item.title"
      clickable
      @click="clickItem(item)"
    >
      <q-item-section
        v-if="item.icon"
        avatar
      >
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>{{ item.desc }}</q-item-label>
      </q-item-section>
    </q-item>

  </div>
</template>

<script lang="ts" setup>
var deliver = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  todoList: {
    type: Array,
    required: false,
    default: () => []
  },
  temporaryList: {
    type: Array,
    required: false,
    default: () => []
  },
  clickHandler: {
    type: Function,
    required: false
  }
})
function clickItem(item: any) {
  console.log(item)
  /* 
    处于搜索状态时,用户点击代办事项时,将临时列表更改为代办事项列表
    如果有传入 clickHandler,则执行 clickHandler
  */
  if (deliver.clickHandler) {
    deliver.clickHandler(item)
  }
}
</script>
