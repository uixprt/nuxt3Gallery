<template>
  <figure  :style="{minHeight: `${photo.height}px`}">
    <NuxtLink :href="`/photo/${photo.id}`">
      <img :src="photo.thumbnailUrl" alt="{{photo.title}}">
      <figcaption><span>{{ photo.id }}) {{ photo.title }}</span></figcaption>
    </NuxtLink>
  </figure>
</template>


<script setup lang="ts">
const props = defineProps({
  photo: Object
})

</script>

<style scoped lang="scss">
figure {
  display: block;
  margin: 0;
  position: relative;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 0.5em;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
}

figcaption {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(#333, 0.95);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;


  figure:hover & {
    opacity: 1;
  }

  span {
    max-width: 80%;
    text-align: center;
  }
}
</style>
