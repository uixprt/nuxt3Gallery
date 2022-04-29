<template>
  <header>
    <div class="brand">
      <h1>
        Nuxt 3 Gallery
      </h1>
    </div>
    <p class="m-b">Masonry Gallery implementation with Vue Composition API and Nuxt 3</p>
    <p><NuxtLink class="button" to="https://github.com/uixprt/nuxt3Gallery">See Source Code on GitHub</NuxtLink></p>
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

.brand {
  display: flex;
}
</style>
