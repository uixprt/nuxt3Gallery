<template>
  <figure>
    <img :src="url" alt="{{title}}" :style="{minHeight: '600px'}" class="mb-2">
    <figcaption class="mb-2">{{ title }}</figcaption>
  </figure>
</template>


<script setup lang="ts">
defineProps({
  url: String,
  title: String,
})
</script>

<style scoped lang="scss">
figure {
  margin: 0;

  img {
    display: block;
    position: relative;
    overflow: hidden;
    border: 2px solid #ccc;
    border-radius: 0.5em;
    max-width: 100%;
  }

  figcaption {
    font-size: 1.5em;
  }
}
</style>
