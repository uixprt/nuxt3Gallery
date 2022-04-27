<template>
  <header>
    <h1>Nuxt 3 Gallery</h1>
    <p>Masonry Gallery implementation with Vue Composition API and Nuxt 3</p>
    <p><a href="https://github.com/uixprt/nuxt3Gallery">See Source Code on GitHub</a></p>
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

a {
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
</style>
