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
</style>
