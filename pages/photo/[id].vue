<template>
  <div class="container">
    <Header :home="false"/>
    <Image
        :url="data.url"
        :title="data.title"
    ></Image>
  </div>
</template>

<script setup lang="ts">
const rout = useRoute();
const id = +rout.params.id;

const {data} = await useFetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
</script>
