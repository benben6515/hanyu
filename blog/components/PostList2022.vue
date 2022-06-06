<script setup>
import items_2022 from '../2022/items.js'
</script>

<template>
  <ul v-if="items_2022">
    <li v-for="item in items_2022" :key="item.text">
      <a :href="item.link">{{item.text}}</a>
    </li>
  </ul>
</template>
