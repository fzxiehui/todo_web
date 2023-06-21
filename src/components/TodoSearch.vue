<template>
  <q-input 
    v-model="searchText" 
    label="Search" 
    @update:model-value="searchHandler"
    counter 
  >

    <template 
      v-slot:prepend
    >
      <q-icon name="search" />
    </template>

    <template 
      v-if="searchText"
      v-slot:append
    >
      <q-icon name="close" @click="searchText = ''" class="cursor-pointer"></q-icon>
    </template>

    <template 
      v-slot:hint
    >
      Please enter the keyword.
    </template>

  </q-input>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

defineProps({
  searchHandler: {
    type: Function,
    required: true
  }
})

var searchText = ref('')
// const options = ['很刑', '可拷']
// const history = ['罗老师', '刑法课堂', 'todo']

// function updateSearchText (value: string) {
//  console.log(searchText.value)
// }


</script>
