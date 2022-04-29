<template>
  <figure>
    <img :src="url" alt="{{title}}">
    <figcaption>{{ title }}</figcaption>
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
    margin-bottom: 2em;
    position: relative;
    overflow: hidden;
    border: 2px solid #ccc;
    border-radius: 0.5em;
    max-width: 100%;
  }

  figcaption {
    font-size: 2em;
  }
}
</style>
