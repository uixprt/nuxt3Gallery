<template>
  <header>
    <div class="brand">
      <NuxtLink class="button home" v-if="!home" to="/">Home</NuxtLink>
      <h1>
        Nuxt 3 Gallery
      </h1>
    </div>
    <p class="m-b">Masonry Gallery implementation with Vue Composition API and Nuxt 3</p>
    <p><a class="button" href="https://github.com/uixprt/nuxt3Gallery">See Source Code on GitHub</a></p>
  </header>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 300;
  margin: 0;
}

header {
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1.5em;
}

.button {
  transition: background-color 0.3s ease-in-out;
  padding: 0.5em;
  color: #fff;
  border-radius: 0.5em;
  text-decoration: none;

  &,
  &:visited {
    background-color: #3abdd9;
  }

  &:hover,
  &:active {
    background-color: darken(#3abdd9, 10%);
  }
}

.brand {
  display: flex;
}

.home {
  font-size: 14px;
  margin-right: 0.5em;
}

.m-b {
  margin-bottom: 2em;
}
</style>


<script setup lang="ts">
defineProps({
  home: Boolean
})
</script>
