<template>
  <div class="container">
    <Header home="true"/>
    <Gallery/>
  </div>
</template>


<script>
export default {
  components: {}
}
</script>

<style lang="scss">
body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #222;
  background-color: #adadad;
}

.container {
  padding-top: 8px;
  width: calc(100% - 18px);
  margin: 0 auto;
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

.mb-1 {
  margin-bottom: 1em;
}

.mb-2 {
  margin-bottom: 2em;
}
</style>
