<template>
  <q-input 
    v-model="searchText" 
    label="Search" 
    @update:model-value="searchHandler"
    counter 
  >

    <!-- 搜索框前置图标 -->
    <template 
      v-slot:prepend
    >
      <q-icon name="search" />
    </template>

    <!-- 搜索框后置图标 -->
    <template 
      v-if="searchText"
      v-slot:append
    >
      <q-icon 
        name="close" 
        @click="closeSearch" 
        class="cursor-pointer"
      />
    </template>

    <!-- 搜索框提示 -->
    <template 
      v-slot:hint
    >
      Please enter the keyword.
    </template>

  </q-input>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

var searchText = ref('')

var deliver = defineProps({
  searchHandler: {
    type: Function,
    required: true
  },
	closeHandler: {
		type: Function,
		required: false
	}
})

function closeSearch() {
  searchText.value = ''
	if (deliver.closeHandler) {
		deliver.closeHandler()
	}
}

</script>
